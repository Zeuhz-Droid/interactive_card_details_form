import './App.css';
import React from 'react';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    // The values of the state can be altered/changed as required.
    this.state = {
      cardName: 'Jane Appleseed',
      cardNumber: '0000 0000 0000 0000',
      month: 'MM',
      year: 'YY',
      cvc: 123,
    };
  }
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
      </div>
    );
  }
}

export default App;
