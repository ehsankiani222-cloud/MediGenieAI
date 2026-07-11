import { useState } from "react";
import "../styles/AddPatientForm.css";
import PrimaryButton from "./PrimaryButton";

function AddPatientForm() {
  const [name, setName] = useState("");
  const [insurance, setInsurance] = useState("");
  const [provider, setProvider] = useState("");

  function handleAddPatient() {
    if (!name || !insurance || !provider) {
      alert("Please fill all fields.");
      return;
    }

    alert("Patient Added Successfully ✅");

    setName("");
    setInsurance("");
    setProvider("");
  }

  return (
    <div className="patient-form">
      <h2>Add New Patient</h2>

      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Insurance"
        value={insurance}
        onChange={(e) => setInsurance(e.target.value)}
      />

      <input
        type="text"
        placeholder="Provider"
        value={provider}
        onChange={(e) => setProvider(e.target.value)}
      />

      <PrimaryButton
        text="Add Patient"
        onClick={handleAddPatient}
      />
    </div>
  );
}

export default AddPatientForm;