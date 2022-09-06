import "./ThankYou.css";
import iconComplete from "../img/icon-complete.svg";
import React from "react";

class ThankYou extends React.Component {
  render() {
    return (
      <div className={`thankyou ${this.props.form ? "hide" : ""}`}>
        <img src={iconComplete} className="icon-complete" />
        <span className="thank-you--title">THANK YOU!</span>
        <p className="thank-you--text">We've added your card details</p>
        <div className="btn btn-submit thank-you--btn">
          <input type="submit" value="Continue" />
        </div>
      </div>
    );
  }
}

export default ThankYou;
