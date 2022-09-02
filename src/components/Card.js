import './Card.css';
import React from 'react';
import logo from '../img/card-logo.svg';

const CardFront = ({ cardName, cardNumber, month, year }) => {
  return (
    <div className="card-front">
      <span className="card-logo">
        <img src={logo} alt="card-logo" />
      </span>
      <div className="card-details">
        <span className="card-number">{cardNumber}</span>
        <div className="name-expiry-date-container">
          <span className="card-name">{cardName}</span>
          <span className="card-expiry-date">
            {month}/{year}
          </span>
        </div>
      </div>
    </div>
  );
};

const CardBack = ({ cvc }) => {
  return (
    <div className="card-back">
      <span className="card-cvc">{cvc}</span>
    </div>
  );
};

const Card = ({ cardName, cardNumber, cvc, month, year }) => {
  return (
    <div className="Card">
      <CardFront
        cardName={cardName}
        cardNumber={cardNumber}
        month={month}
        year={year}
      />
      <CardBack cvc={cvc} />
    </div>
  );
};

export default Card;
