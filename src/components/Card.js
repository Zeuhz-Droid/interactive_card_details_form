import "./Card.css";
import React from "react";
import logo from "../img/card-logo.svg";

const CardFront = ({ cardDetails }) => {
  return (
    <div className="card-front">
      <span className="card-logo">
        <img src={logo} alt="card-logo" />
      </span>
      <div className="card-details">
        <span className="card-number">{`${
          cardDetails.cardNumber.value || "0000 0000 0000 0000"
        }`}</span>
        <div className="name-expiry-date-container">
          <span className="card-name">{`${
            cardDetails.cardName.value || "Jane Appleseed"
          }`}</span>
          <span className="card-expiry-date">
            {`${cardDetails.month.value || "00"}`}/
            {`${cardDetails.year.value || "00"}`}
          </span>
        </div>
      </div>
    </div>
  );
};

const CardBack = ({ cardDetails }) => {
  return (
    <div className="card-back">
      <span className="card-cvc">{`${cardDetails.cvc.value || "000"}`}</span>
    </div>
  );
};

const Card = ({ cardDetails }) => {
  return (
    <div className="Card">
      <CardFront cardDetails={cardDetails} />
      <CardBack cardDetails={cardDetails} />
    </div>
  );
};

export default Card;
