import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";

const App = () => {
  // The values of the cardDetails can be altered/changed as required.
  const [cardDetails, setCardDetails] = useState({
    cardName: { id: "name", value: "" },
    cardNumber: { id: "number", value: "" },
    month: { id: "month", value: "" },
    year: { id: "year", value: "" },
    cvc: { id: "cvc", value: "" },
  });
  const [form, setForm] = useState(true);

  const handleStateChange = (value) => {
    setCardDetails((prevDetails) => {
      return { ...prevDetails, cardName: { id: "name", value: value } };
    });
  };

  const setFormValue = () => {
    setForm((prevFormValue) => !prevFormValue);
  };

  return (
    <div className="App">
      <Card cardDetails={cardDetails} />
      <Form
        handleChange={handleStateChange}
        setForm={setFormValue}
        cardDetails={cardDetails}
        form={form}
      />
      <ThankYou
        handleChange={handleStateChange}
        form={form}
        setForm={setForm}
      />
    </div>
  );
};

export default App;
