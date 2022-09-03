import "./Form.css";
import React from "react";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: false, number: false, time: false, cvc: false };
  }

  validateName = () => {
    if (!this.props.cardName) this.setState({ name: true });
  };

  validateNumber = () => {
    if (!this.props.cardNumber) this.setState({ number: true });
  };

  validateTime = () => {
    if (!this.props.month && !this.props.year) this.setState({ time: true });
  };

  validateCvc = () => {
    if (!this.props.cvc) this.setState({ cvc: true });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.validateName();
    this.validateNumber();
    this.validateTime();
    this.validateCvc();
  };

  render() {
    return (
      <form className="Form" onSubmit={this.onFormSubmit}>
        <div className="form-container">
          <div className="form-group">
            <label>CARDHOLDER NAME</label>
            <input
              type="text"
              value={this.props.cardName}
              onChange={(e) => this.props.setCardName(e.target.value)}
              placeholder="e.g. Jane Appleseed"
            />
            <span className={`error ${this.state.name ? "show" : ""}`}>
              Wrong format, letters only
            </span>
          </div>

          <div className="form-group">
            <label>CARD NUMBER</label>
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
            <span className={`error ${this.state.name ? "show" : ""}`}>
              Wrong format, numbers only
            </span>
          </div>

          <div className="form-group">
            <div className="form-group-joint">
              <label>EXP.DATE(MM/YY)</label>
              <div className="form-group-joint-input">
                <input type="number" placeholder="MM" />
                <input type="number" placeholder="YY" />
              </div>
              <span className={`error ${this.state.time ? "show" : ""}`}>
                Can't be blank
              </span>
            </div>

            <div className="form-group-disjointed-input">
              <label>CVC</label>
              <input type="tel" placeholder="e.g. 123" />
              <span className={`error ${this.state.cvc ? "show" : ""}`}>
                Can't be blank
              </span>
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
