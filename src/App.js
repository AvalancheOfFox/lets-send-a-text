import './App.css';

function App() {

  function buttonOneClick(){
    console.log("button one was clicked")
  }

  function buttonTwoClick(){
    console.log("button two was clicked")
  }

  function buttonThreeClick(){
    console.log("button three was clicked")
  }

  function sendAText(){
    // If Button One Has Been Clicked &&
    // If Button Two Has Been Clicked &&
    // If Button Three Has Been Clicked 
    // -> 
    // Then I want to use the Twilio API to send a text
  }



  return (
    <div className="App">
      <header className="buttonRow">
        <button onClick={buttonOneClick}>One</button>
        <button onClick={buttonTwoClick}>Two</button>
        <button onClick={buttonThreeClick}>Three</button>
      </header>
    </div>
  );
}

export default App;
