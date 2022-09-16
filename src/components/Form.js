import './Form.css';
import React, { useState, useEffect, useRef } from 'react';

const Form = ({ handleChange, setForm, cardDetails, form }) => {
  const [cardNameState, setCardNameState] = useState();
  const [cardNumberState, setCardNumberState] = useState();
  const [cardTimeState, setCardtimeState] = useState();
  const [cardCvcState, setCardCvcState] = useState();

  const monthRef = useRef();
  const specialChar = /[`!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?~]/;
  const numChar = /[0-9]/;
  const letterChar = /[A-Z]/;

  useEffect(() => {
    monthRef.current.addEventListener('blur', padInput);
    return () => {
      monthRef.current.removeEventListener('blur', padInput);
    };
  });

  const padInput = (e) => {
    console.log(e);
    if (e.target.value && e.target.value.length <= 1) {
      cardDetails.month.value = e.target.value.padStart(2, '0');
      console.log(cardDetails.month.value);
    }
  };

  const spaceCardNumber = (str) => {
    return (
      str
        .replace(/\s/g, '')
        .match(/.{1,4}/g)
        ?.join(' ')
        .substr(0, 19) || ''
    );
  };

  // using Regular expression (RegExp)
  const checkName = (name) => {
    return specialChar.test(name) || numChar.test(name);
  }; // true

  const checkNumber = (number) => {
    return letterChar.test(number) || specialChar.test(number);
  }; //true

  const checkData = (value, length, min, max) => {
    let newArr;
    const arr = [...value];
    if (arr.length >= length) {
      newArr = arr.slice(0, length).join('');
    }
    if (arr.length > 0 && arr.length < length) {
      return arr.join('');
    }
    if (max && +newArr > max) return max;
    if (min && +newArr < min) return min;
    else return newArr;
  };

  const validateName = () => {
    if (cardDetails.cardName.value)
      if (checkName(cardDetails.cardName.value)) {
        setCardNameState(true);
        return false;
      } else {
        setCardNameState(false);
        return true;
      }
    else {
      setCardNameState(true);
      return false;
    }
  };

  const validateNumber = () => {
    if (cardDetails.cardNumber.value)
      if (checkNumber(cardDetails.cardNumber.value)) {
        setCardNumberState(true);
        return false;
      } else {
        setCardNumberState(false);
        return true;
      }
    else {
      setCardNumberState(true);
      return false;
    }
  };

  const validateTime = () => {
    if (cardDetails.month.value && cardDetails.year.value) {
      setCardtimeState(false);
      return true;
    }
    if (!cardDetails.month.value || !cardDetails.year.value) {
      setCardtimeState(true);
      return false;
    }
  };

  const validateCvc = () => {
    if (cardDetails.cvc.value) {
      setCardCvcState(false);
      return true;
    }
    if (!cardDetails.cvc.value) {
      setCardCvcState(true);
      return false;
    }
  };

  const setFormValue = () => {
    if (validateName() && validateNumber() && validateTime() && validateCvc())
      setForm(false);
    else setForm(true);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    validateName();
    validateNumber();
    validateTime();
    validateCvc();
    setFormValue();
  };

  return (
    <form className={`Form ${form ? '' : 'hide'}`} onSubmit={onFormSubmit}>
      <div className="form-container">
        <div className="form-group">
          <label>CARDHOLDER NAME</label>
          <input
            type="text"
            value={cardDetails.cardName.value}
            onChange={(e) => handleChange('name', e.target.value)}
            placeholder="e.g. Jane Appleseed"
          />
          <span className={`error ${cardNameState ? 'show' : ''}`}>
            Wrong format, letters only
          </span>
        </div>

        <div className="form-group">
          <label>CARD NUMBER</label>
          <input
            type="text"
            value={cardDetails.cardNumber.value}
            onChange={(e) =>
              handleChange(
                'number',
                spaceCardNumber(e.target.value.toUpperCase())
              )
            }
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <span className={`error ${cardNumberState ? 'show' : ''}`}>
            Wrong format, numbers only
          </span>
        </div>

        {/* WORKING ON THE NUMBERS/TIME */}
        <div className="form-group">
          <div className="form-group-joint">
            <label>EXP.DATE(MM/YY)</label>
            <div className="form-group-joint-input">
              <input
                ref={monthRef}
                type="number"
                placeholder="MM"
                min={1}
                max={12}
                value={cardDetails.month.value}
                onChange={(e) =>
                  handleChange('month', checkData(e.target.value, 2, 1, 12))
                }
              />
              <input
                type="number"
                placeholder="YY"
                min={22}
                max={30}
                value={cardDetails.year.value}
                onChange={(e) =>
                  handleChange('year', checkData(e.target.value, 2, 22, 30))
                }
              />
            </div>
            <span className={`error ${cardTimeState ? 'show' : ''}`}>
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
              value={cardDetails.cvc.value}
              onChange={(e) =>
                handleChange('cvc', checkData(e.target.value, 3, 100, 999))
              }
            />
            <span className={`error ${cardCvcState ? 'show' : ''}`}>
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
};

export default Form;
