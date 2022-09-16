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

  const handleStateChange = (id, value) => {
    setCardDetails((prevDetails) => {
      if (id == "name") {
        return { ...prevDetails, cardName: { id: "name", value: value } };
      } else if (id == "number") {
        return { ...prevDetails, cardNumber: { id: "number", value: value } };
      } else if (id == "month") {
        return { ...prevDetails, month: { id: "month", value: value } };
      } else if (id == "year") {
        return { ...prevDetails, year: { id: "year", value: value } };
      } else if (id == "cvc") {
        return { ...prevDetails, cvc: { id: "cvc", value: value } };
      }
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
      <ThankYou
        handleChange={handleStateChange}
        form={form}
        setForm={setForm}
      />
    </div>
  );
};

export default App;
