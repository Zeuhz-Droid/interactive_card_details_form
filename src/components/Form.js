import './Form.css';
import React from 'react';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: false,
      number: false,
      time: false,
      cvc: false,
      code: true,
    };
    // console.log(this.spaceCardNumber('12345678901234567890'));
    this.inputRef = React.createRef();
    this.specialChar = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
    this.numChar = /[0-9]/;
    this.letterChar = /[a-z]/;
  }

  componentDidMount() {
    this.inputRef.current.addEventListener('keydown', this.handleBackspace);
  }

  componentWillUnmount() {
    this.inputRef.current.removeEventListener('keydown', this.handleBackspace);
  }

  handleBackspace = (e) => {
    if (e.keyCode === 8) this.setState({ code: false });
    else this.setState({ code: true });
  };

  spaceCardNumber = (str) => {
    for (let i = 0; i <= str.length; i++)
      if (this.state.code)
        if (str.length === 4 + i * 5 && str.length < 19) str += ' ';
    return str;
  };

  // using Regular expression (RegExp)
  checkName(name) {
    return this.specialChar.test(name) || this.numChar.test(name);
  }

  checkNumber(number) {
    return this.letterChar.test(number) || this.specialChar.test(number);
  }

  getCardNumber = (e) => {
    this.props.setCardNumber(this.spaceCardNumber(e.target.value));
  };

  validateName = () => {
    if (this.props.cardName)
      if (this.checkName(this.props.cardName)) {
        this.setState({ name: true });
        return true;
      } else this.setState({ name: false });
  };

  validateNumber = () => {
    if (this.props.cardNumber)
      if (this.checkNumber(this.props.cardNumber)) {
        this.setState({ number: true });
        return true;
      } else this.setState({ number: false });
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
            <span className={`error ${this.state.name ? 'show' : ''}`}>
              Wrong format, letters only
            </span>
          </div>

          <div className="form-group">
            <label>CARD NUMBER</label>
            <input
              ref={this.inputRef}
              type="text"
              maxLength={19}
              value={this.props.cardNumber}
              onChange={this.getCardNumber}
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <span className={`error ${this.state.number ? 'show' : ''}`}>
              Wrong format, numbers only
            </span>
          </div>

          <div className="form-group">
            <div className="form-group-joint">
              <label>EXP.DATE(MM/YY)</label>
              <div className="form-group-joint-input">
                <input
                  type="number"
                  placeholder="MM"
                  onChange={(e) => this.props.setMonth(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="YY"
                  onChange={(e) => this.props.setYear(e.target.value)}
                />
              </div>
              <span className={`error ${this.state.time ? 'show' : ''}`}>
                Can't be blank
              </span>
            </div>

            <div className="form-group-disjointed-input">
              <label>CVC</label>
              <input
                type="tel"
                placeholder="e.g. 123"
                onChange={(e) => this.props.setCvc(e.target.value)}
              />
              <span className={`error ${this.state.cvc ? 'show' : ''}`}>
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
