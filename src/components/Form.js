import "./Form.css";
import React from "react";
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
    this.monthRef = React.createRef();
    this.specialChar = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
    this.numChar = /[0-9]/;
    this.letterChar = /[A-Z]/;
  }

  componentDidMount() {
    this.monthRef.current.addEventListener("blur", this.padInput);
  }

  componentWillUnmount() {
    this.monthRef.current.removeEventListener("blur", this.padInput);
  }

  padInput = (e) => {
    if (e.target.value.length <= 1) {
      console.log(e.target.value.length);
      this.props.setMonth(e.target.value.padStart(2, "0"));
    }
  };

  // Tn = a +(n-1)d
  spaceCardNumber = (str) => {
    // for (let i = 0; i < 3; i++)
    //   if (this.state.code) if (str.length === 4 + i * 5) str += " ";
    // return this.checkData(str, 19);
    return (
      str
        .replace(/\s/g, "")
        .match(/.{1,4}/g)
        ?.join(" ")
        .substr(0, 19) || ""
    );
  };

  // using Regular expression (RegExp)
  checkName(name) {
    return this.specialChar.test(name) || this.numChar.test(name);
  } // true

  checkNumber(number) {
    return this.letterChar.test(number) || this.specialChar.test(number);
  } //true

  checkData = (value, length, min, max) => {
    let newArr;
    const arr = [...value];
    if (arr.length >= length) {
      newArr = arr.slice(0, length).join("");
    }
    if (arr.length > 0 && arr.length < length) {
      return arr.join("");
    }
    if (max && +newArr > max) return max;
    if (min && +newArr < min) return min;
    else return newArr;
  };

  validateName = () => {
    if (this.props.cardDetails.cardName.value)
      if (this.checkName(this.props.cardDetails.cardName.value)) {
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
    if (this.props.cardDetails.cardNumber.value)
      if (this.checkNumber(this.props.cardDetails.cardNumber.value)) {
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
    if (
      this.props.cardDetails.month.value &&
      this.props.cardDetails.year.value
    ) {
      this.setState({ time: false });
      return true;
    }
    if (
      !this.props.cardDetails.month.value ||
      !this.props.cardDetails.year.value
    ) {
      this.setState({ time: true });
      return false;
    }
  };

  validateCvc = () => {
    if (this.props.cardDetails.cvc.value) {
      this.setState({ cvc: false });
      return true;
    }
    if (!this.props.cardDetails.cvc.value) {
      this.setState({ cvc: true });
      return false;
    }
  };

  setFormValue() {
    if (
      this.validateName() &&
      this.validateNumber() &&
      this.validateTime() &&
      this.validateCvc()
    )
      this.props.setForm(false);
    else return this.props.setForm(true);
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.validateName();
    this.validateNumber();
    this.validateTime();
    this.validateCvc();
    this.setFormValue();
  };

  render() {
    return (
      <form
        className={`Form ${this.props.form ? "" : "hide"}`}
        onSubmit={this.onFormSubmit}
      >
        <div className="form-container">
          <div className="form-group">
            <label>CARDHOLDER NAME</label>
            <input
              type="text"
              value={this.props.cardDetails.cardName.value}
              onChange={(e) => this.props.handleChange("name", e.target.value)}
              placeholder="e.g. Jane Appleseed"
            />
            <span className={`error ${this.state.name ? "show" : ""}`}>
              Wrong format, letters only
            </span>
          </div>

          <div className="form-group">
            <label>CARD NUMBER</label>
            <input
              type="text"
              value={this.props.cardDetails.cardNumber.value}
              onChange={(e) =>
                this.props.handleChange(
                  "number",
                  this.spaceCardNumber(e.target.value.toUpperCase())
                )
              }
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <span className={`error ${this.state.number ? "show" : ""}`}>
              Wrong format, numbers only
            </span>
          </div>

          {/* WORKING ON THE NUMBERS/TIME */}
          <div className="form-group">
            <div className="form-group-joint">
              <label>EXP.DATE(MM/YY)</label>
              <div className="form-group-joint-input">
                <input
                  ref={this.monthRef}
                  type="number"
                  placeholder="MM"
                  min={1}
                  max={12}
                  value={this.props.cardDetails.month.value}
                  onChange={(e) =>
                    this.props.handleChange(
                      "month",
                      this.checkData(e.target.value, 2, 1, 12)
                    )
                  }
                />
                <input
                  type="number"
                  placeholder="YY"
                  min={22}
                  max={30}
                  value={this.props.cardDetails.year.value}
                  onChange={(e) =>
                    this.props.handleChange(
                      "year",
                      this.checkData(e.target.value, 2, 22, 30)
                    )
                  }
                />
              </div>
              <span className={`error ${this.state.time ? "show" : ""}`}>
                Can't be blank
              </span>
            </div>

            <div className="form-group form-group-disjointed-input">
              <label>CVC</label>
              <input
                type="number"
                min={100}
                max={999}
                placeholder="e.g. 123"
                value={this.props.cardDetails.cvc.value}
                onChange={(e) =>
                  this.props.handleChange(
                    "cvc",
                    this.checkData(e.target.value, 3, 100, 999)
                  )
                }
              />
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
