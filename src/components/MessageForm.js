import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MessageForm.css';

class MessageForm extends Component{

  render(){
    return (
      <form className="container">
        <div >
          <label htmlFor="to">To:</label>
          <br></br>
          <input
             type="tel"
             name="to"
             id="to"
          />
        </div>
        <div>
          <label htmlFor="body">Message Body:</label>
          <br></br>
          <textarea name="body" id="body"/>
        </div>
        <button type="submit">
          Send My Text!
        </button>
      </form>
    )
  }

}


MessageForm.propTypes = {
  to: PropTypes.string,
  from: PropTypes.string,
  body: PropTypes.string
};

MessageForm.defaultProps = {};

export default MessageForm;
