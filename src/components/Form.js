import './Form.css';
import React from 'react';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleSubmit(event) {
    alert('Your card details was successfully submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <div className="form-container">
          <div className="form-group">
            <label>CARDHOLDER NAME</label>
            <input type="text" placeholder="e.g. Jane Appleseed" />
          </div>

          <div className="form-group">
            <label>CARD NUMBER</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
            <span className="error">Wrong format, numbers only</span>
          </div>

          <div className="form-group">
            <div className="form-group-joint">
              <label>EXP.DATE(MM/YY)</label>
              <div className="form-group-joint-input">
                <input type="number" placeholder="MM" />
                <input type="number" placeholder="YY" />
              </div>
              <span className="error">Can't be blank</span>
            </div>

            <div className="form-group">
              <label>CVC</label>
              <input type="tel" placeholder="e.g. 123" />
              <span className="error">Can't be blank</span>
            </div>
          </div>

          <div className="btn btn-submit">
            <input type="submit" value="Confirm" />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
