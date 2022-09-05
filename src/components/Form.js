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
      form: false,
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

  checkData = (value, length, min, max) => {
    const arr = [...value];
    let newArr;
    if (arr.length >= length) {
      newArr = arr.splice(0, length).join('');
    }
    if (arr.length > 0 && arr.length < length) {
      return arr.join('');
    }
    if (+newArr > max) return max;
    if (+newArr < min) return min;
    else return newArr;
  };

  validateName = () => {
    if (this.props.cardName)
      if (this.checkName(this.props.cardName)) {
        this.setState({ name: true });
        return false;
      } else {
        this.setState({ name: false });
        return true;
      }
    else {
      this.setState({ name: true });
      return false;
    }
  };

  validateNumber = () => {
    if (this.props.cardNumber)
      if (this.checkNumber(this.props.cardNumber)) {
        this.setState({ number: true });
        return false;
      } else {
        this.setState({ number: false });
        return true;
      }
    else {
      this.setState({ number: true });
      return false;
    }
  };

  validateTime = () => {
    if (this.props.month && this.props.year) {
      this.setState({ time: false });
      return true;
    }
    if (!this.props.month || !this.props.year) {
      this.setState({ time: true });
      return false;
    }
  };

  validateCvc = () => {
    if (this.props.cvc) {
      this.setState({ cvc: false });
      return true;
    }
    if (!this.props.cvc) {
      this.setState({ cvc: true });
      return false;
    }
  };

  validateForm() {
    if (
      this.validateName() &&
      this.validateNumber() &&
      this.validateTime() &&
      this.validateCvc()
    )
      this.setState({ form: true });
    else return this.setState({ form: false });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.validateForm();
  };

  render() {
    return (
      <form
        className={`Form ${this.state.form ? 'hide' : ''}`}
        onSubmit={this.onFormSubmit}
      >
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
              minLength={16}
              value={this.props.cardNumber}
              onChange={(e) =>
                this.props.setCardNumber(this.spaceCardNumber(e.target.value))
              }
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <span className={`error ${this.state.number ? 'show' : ''}`}>
              Wrong format, numbers only
            </span>
          </div>

          {/* WORKING ON THE NUMBERS/TIME */}
          <div className="form-group">
            <div className="form-group-joint">
              <label>EXP.DATE(MM/YY)</label>
              <div className="form-group-joint-input">
                <input
                  type="number"
                  placeholder="MM"
                  min={1}
                  max={12}
                  value={this.props.month}
                  onChange={(e) =>
                    this.props.setMonth(
                      this.checkData(e.target.value, 2, 1, 12)
                    )
                  }
                />
                <input
                  type="number"
                  placeholder="YY"
                  min={22}
                  max={30}
                  value={this.props.year}
                  onChange={(e) =>
                    this.props.setYear(
                      this.checkData(e.target.value, 2, 22, 29)
                    )
                  }
                />
              </div>
              <span className={`error ${this.state.time ? 'show' : ''}`}>
                Can't be blank
              </span>
            </div>

            <div className="form-group-disjointed-input">
              <label>CVC</label>
              <input
                type="number"
                min={100}
                max={999}
                placeholder="e.g. 123"
                value={this.props.cvc}
                onChange={(e) =>
                  this.props.setCvc(this.checkData(e.target.value, 3, 100, 999))
                }
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
