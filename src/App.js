import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";

const App = () => {
  // The values of the cardDetails can be altered/changed as required.
  const [cardDetails, setCardDetails] = useState({
    cardName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });
  const [form, setForm] = useState(true);

  const handleStateChange = (name, value) => {
    setCardDetails((prevDetails) => {
      return { ...prevDetails, [name]: value };
    });
  };

  const resetFormDetails = () => {
    setCardDetails({
      cardName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    });
  };

  const setFormValue = (value) => {
    setForm(value);
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
      <ThankYou resetForm={resetFormDetails} form={form} setForm={setForm} />
    </div>
  );
};

export default App;
