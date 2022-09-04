import './App.css';
import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  // The values of the state can be altered/changed as required.
  state = {
    cardName: '',
    cardNumber: '',
    month: '',
    year: '',
    cvc: '',
  };

  setCardName = (value) => {
    this.setState({ cardName: value });
  };

  setCardNumber = (value) => {
    this.setState({ cardNumber: value });
  };
  // setCard;

  render() {
    return (
      <div className="App">
        <Card
          cardName={this.state.cardName}
          cardNumber={this.state.cardNumber}
          month={this.state.month}
          year={this.state.year}
          cvc={this.state.cvc}
        />
        <Form
          setCardName={this.setCardName}
          setCardNumber={this.setCardNumber}
          // passing state as props
          cardNumber={this.state.cardNumber}
          cardName={this.state.cardName}
          month={this.state.month}
          year={this.state.year}
          cvc={this.state.cvc}
        />
      </div>
    );
  }
}

export default App;
