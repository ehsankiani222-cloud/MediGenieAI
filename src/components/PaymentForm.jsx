import { useContext, useState } from "react";
import PaymentContext from "../context/PaymentContext";
import PrimaryButton from "./PrimaryButton";
import "../styles/AddPatientForm.css";

function PaymentForm() {
  const { addPayment } = useContext(PaymentContext);

  const [patient, setPatient] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  function handleSubmit() {
    if (!patient || !amount || !method) {
      alert("Please fill all fields.");
      return;
    }

    addPayment({
      patient,
      amount,
      method,
    });

    setPatient("");
    setAmount("");
    setMethod("");
  }

  return (
    <div className="patient-form">
      <h2>Add Payment</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={patient}
        onChange={(e) => setPatient(e.target.value)}
      />

      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="text"
        placeholder="Payment Method"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      />

      <PrimaryButton
        text="Add Payment"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default PaymentForm;