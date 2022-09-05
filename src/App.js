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
    form: true,
  };

  setCardName = (value) => {
    this.setState({ cardName: value });
  };

  setCardNumber = (value) => {
    this.setState({ cardNumber: value });
  };

  setMonth = (value) => {
    this.setState({ month: value });
  };

  setYear = (value) => {
    this.setState({ year: value });
  };

  setCvc = (value) => {
    this.setState({ cvc: value });
  };

  setForm = (value) => {
    this.setState({ form: value });
  };

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
          setMonth={this.setMonth}
          setYear={this.setYear}
          setCvc={this.setCvc}
          setForm={this.setForm}
          cardNumber={this.state.cardNumber}
          cardName={this.state.cardName}
          month={this.state.month}
          year={this.state.year}
          cvc={this.state.cvc}
          form={this.state.form}
        />
      </div>
    );
  }
}

export default App;
