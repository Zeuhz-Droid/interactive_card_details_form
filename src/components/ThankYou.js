import "./ThankYou.css";
import iconComplete from "../img/icon-complete.svg";
import React, { useEffect, useRef } from "react";

const ThankYou = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("click", initForm);
  }, []);

  const initForm = () => {
    props.resetForm();
    props.setForm(true);
  };

  return (
    <div className={`thankyou ${props.form ? "hide" : ""}`}>
      <img src={iconComplete} className="icon-complete" alt="icon-check" />
      <span className="thank-you--title">THANK YOU!</span>
      <p className="thank-you--text">We've added your card details</p>
      <div className="btn btn-submit thank-you--btn">
        <input ref={inputRef} type="submit" value="Continue" />
      </div>
    </div>
  );
};

export default ThankYou;
