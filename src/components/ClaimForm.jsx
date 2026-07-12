import { useContext, useEffect, useState } from "react";
import ClaimContext from "../context/ClaimContext";
import PrimaryButton from "./PrimaryButton";
import "../styles/ClaimForm.css";

function ClaimForm() {
  const {
    addClaim,
    updateClaim,
    editingClaim,
  } = useContext(ClaimContext);

  const [patient, setPatient] = useState("");
  const [dos, setDos] = useState("");
  const [cpt, setCpt] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    if (editingClaim) {
      setPatient(editingClaim.patient);
      setDos(editingClaim.dos);
      setCpt(editingClaim.cpt);
      setAmount(editingClaim.amount);
    }
  }, [editingClaim]);

  function handleSubmit() {
    if (!patient || !dos || !cpt || !amount) {
      alert("Please fill all fields.");
      return;
    }

    if (editingClaim) {
      updateClaim({
        ...editingClaim,
        patient,
        dos,
        cpt,
        amount,
      });
    } else {
      addClaim({
        patient,
        dos,
        cpt,
        amount,
        status: "Submitted",
      });
    }

    setPatient("");
    setDos("");
    setCpt("");
    setAmount("");
  }

  return (
    <div className="patient-form">
      <h2>
        {editingClaim ? "Edit Claim" : "Add New Claim"}
      </h2>

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
        text={editingClaim ? "Update Claim" : "Add Claim"}
        onClick={handleSubmit}
      />
    </div>
  );
}

export default ClaimForm;