import React, {Component} from 'react';
import './MessageForm.css';

class MessageForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      message: {
        to: '',
        body: ''
      },
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }
  
  onSubmit(event){
    event.preventDefault();
    this.setState({ submitting: true})
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
    .then( res => console.log(res))
    .then( data => {
      if (data.success){
        this.setState({
          error: false,
          submitting: false,
          message: {
            to: '',
            body: ''
          }
        })
      } else{
        this.setState({
          error: true,
          submitting: false
        })
      }
    })
  }

  onInputChange(event){
    const name = event.target.getAttribute('name');
    this.setState({
      message: {...this.state.message, [name]: event.target.value}
    });
  }

  render(){
    return (
      <form className="container"
      onSubmit={this.onSubmit}>
        <div >
          <label htmlFor="to">To:</label>
          <br></br>
          <input
             type="tel"
             name="to"
             id="to"
             value={this.state.message.to}
             onChange={this.onInputChange}
          />
        </div>
        <div>
          <label htmlFor="body">Message Body:</label>
          <br></br>
          <textarea
            name="body"
            id="body"
            value={this.state.message.body}
            onChange={this.onInputChange}/>
        </div>
        <button type="submit" disabled={this.state.submitting}>
          Send My Text!
        </button>
      </form>
    )
  }

}



export default MessageForm;
