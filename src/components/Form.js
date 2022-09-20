import './Form.css';
import React, { useState, useEffect, useRef } from 'react';

import {
  spaceCardNumber,
  checkName,
  checkNumber,
  checkData,
} from './utilities';

const Form = ({ handleChange, setForm, cardDetails, form }) => {
  const [cardNameState, setCardNameState] = useState(false);
  const [cardNumberState, setCardNumberState] = useState(false);
  const [cardTimeState, setCardtimeState] = useState(false);
  const [cardCvcState, setCardCvcState] = useState(false);

  const monthRef = useRef();

  useEffect(() => {
    const monRefCurrent = monthRef.current;
    monRefCurrent.addEventListener('blur', padInput);
    return () => {
      monRefCurrent.removeEventListener('blur', padInput);
    };
  });

  const padInput = (e) => {
    if (e.target.value && e.target.value.length <= 1) {
      handleChange('month', e.target.value.padStart(2, '0'));
    }
  };

  const validateName = () => {
    if (cardDetails.cardName)
      if (checkName(cardDetails.cardName)) {
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
    if (cardDetails.cardNumber)
      if (checkNumber(cardDetails.cardNumber)) {
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
    if (cardDetails.month && cardDetails.year) {
      setCardtimeState(false);
      return true;
    }
    if (!cardDetails.month || !cardDetails.year) {
      setCardtimeState(true);
      return false;
    }
  };

  const validateCvc = () => {
    if (cardDetails.cvc) {
      setCardCvcState(false);
      return true;
    }
    if (!cardDetails.cvc) {
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
            value={cardDetails.cardName}
            name="cardName"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
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
            value={cardDetails.cardNumber}
            name="cardNumber"
            onChange={(e) =>
              handleChange(
                e.target.name,
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
                value={cardDetails.month}
                name="month"
                onChange={(e) =>
                  handleChange(
                    e.target.name,
                    checkData(e.target.value, 2, 1, 12)
                  )
                }
              />
              <input
                type="number"
                placeholder="YY"
                min={22}
                max={30}
                value={cardDetails.year}
                name="year"
                onChange={(e) =>
                  handleChange(
                    e.target.name,
                    checkData(e.target.value, 2, 22, 30)
                  )
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
              value={cardDetails.cvc}
              name="cvc"
              onChange={(e) =>
                handleChange(
                  e.target.name,
                  checkData(e.target.value, 3, 100, 999)
                )
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
