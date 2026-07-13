import { useContext, useEffect, useState } from "react";
import PaymentContext from "../context/PaymentContext";
import PrimaryButton from "./PrimaryButton";
import "../styles/AddPatientForm.css";

function PaymentForm() {
  const {
    addPayment,
    updatePayment,
    editingPayment,
  } = useContext(PaymentContext);

  const [patient, setPatient] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("");

  useEffect(() => {
    if (editingPayment) {
      setPatient(editingPayment.patient);
      setAmount(editingPayment.amount);
      setMethod(editingPayment.method);
    } else {
      setPatient("");
      setAmount("");
      setMethod("");
    }
  }, [editingPayment]);

  const handleSubmit = () => {
    if (!patient || !amount || !method) {
      alert("Please fill all fields.");
      return;
    }

    if (editingPayment) {
      updatePayment({
        ...editingPayment,
        patient,
        amount,
        method,
      });
    } else {
      addPayment({
        patient,
        amount,
        method,
      });
    }

    setPatient("");
    setAmount("");
    setMethod("");
  };

  return (
    <div className="patient-form">
      <h2>{editingPayment ? "Edit Payment" : "Add Payment"}</h2>

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
        text={editingPayment ? "Update Payment" : "Add Payment"}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default PaymentForm;