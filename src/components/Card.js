import React from "react";

const CardFront = ({ cardName, cardNumber, month, year }) => {
  return (
    <div className="card-front">
<<<<<<< HEAD
      <span className="card-logo"> 
        <img src="../public/img/card-logo.svg" alt="card-logo" />
=======
      <span className="card-logo">
        <img src="../../public/img/card-logo.svg" alt="card-logo" />
>>>>>>> 0b5445d19731811f6c61b3d772ef3fe2975a26aa
      </span>
      <div className="card-details">
        <span className="card-number">{cardNumber}</span>
        <div className="name-expiry-date-container">
          <span className="card-name">{cardName}</span>
          <span className="expiry-date">
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
      <span className="cvc">{cvc}</span>
    </div>
  );
};

const Card = ({ cardName, cardNumber, cvc, month, year }) => {
  return (
    <div>
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
