import { useContext, useState } from "react";
import ClaimContext from "../context/ClaimContext";
import PrimaryButton from "./PrimaryButton";
import "../styles/ClaimForm.css";

function ClaimForm() {
  const { addClaim } = useContext(ClaimContext);

  const [patient, setPatient] = useState("");
  const [dos, setDos] = useState("");
  const [cpt, setCpt] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit() {
    if (!patient || !dos || !cpt || !amount) {
      alert("Please fill all fields.");
      return;
    }

    addClaim({
      patient,
      dos,
      cpt,
      amount,
      status: "Submitted",
    });

    setPatient("");
    setDos("");
    setCpt("");
    setAmount("");
  }

  return (
    <div className="patient-form">
      <h2>Add New Claim</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={patient}
        onChange={(e) => setPatient(e.target.value)}
      />

      <input
        type="date"
        value={dos}
        onChange={(e) => setDos(e.target.value)}
      />

      <input
        type="text"
        placeholder="CPT Code"
        value={cpt}
        onChange={(e) => setCpt(e.target.value)}
      />

      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <PrimaryButton
        text="Add Claim"
        onClick={handleSubmit}
      />
    </div>
  );
}

export default ClaimForm;