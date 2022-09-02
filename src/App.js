import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    // The values of the state can be altered/changed as required.
    this.state = {
      cardName: null,
      cardNumber: 0,
      month: "MM",
      year: "YY",
      cvc: 0,
    };
  }
  render() {
    return <div className="App">App</div>;
  }
}

export default App;
