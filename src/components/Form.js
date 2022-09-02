import React from 'react';
class CardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
      }
      handleSubmit(event) {
        alert('Your card details was successfully submitted: ' + this.state.value);
        event.preventDefault();
      }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div className="form-container">
          <label>CARDHOLDER NAME</label>
          <input 
          type="text" 
          placeholder="e.g. Jane Appleseed"/>

          <label>CARD NUMBER</label>
          <input 
          type="tel" 
          placeholder="e.g. 1234 5678 9123 0000"/>

          <label>EXP.DATE(MM/YY)
          <input 
          type="tel" 
          placeholder="MM"/>
          <input type="tel" 
          placeholder="YY"/>
          </label>

          <label>CVC</label>
          <input 
          type="tel" 
          placeholder="e.g. 123"/>

          <div className="Submit-button">
            <input type="submit" 
            value="Confirm" />
          </div>
        </div>
        </form>
      );
    }
  }
  
export default Form;
  