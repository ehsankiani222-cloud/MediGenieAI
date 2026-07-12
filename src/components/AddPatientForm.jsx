import { useContext, useEffect, useState } from "react";
import "../styles/AddPatientForm.css";
import PrimaryButton from "./PrimaryButton";
import PatientContext from "../context/PatientContext";

function AddPatientForm() {
  const {
    addPatient,
    updatePatient,
    editingPatient,
    setEditingPatient,
  } = useContext(PatientContext);

  const [name, setName] = useState("");
  const [insurance, setInsurance] = useState("");
  const [provider, setProvider] = useState("");

  useEffect(() => {
    if (editingPatient) {
      setName(editingPatient.name);
      setInsurance(editingPatient.insurance);
      setProvider(editingPatient.provider);
    } else {
      setName("");
      setInsurance("");
      setProvider("");
    }
  }, [editingPatient]);

  function handleSubmit() {
    if (!name || !insurance || !provider) {
      alert("Please fill all fields.");
      return;
    }

    if (editingPatient) {
      updatePatient({
        ...editingPatient,
        name,
        insurance,
        provider,
      });
    } else {
      addPatient({
        name,
        insurance,
        provider,
      });
    }

    setName("");
    setInsurance("");
    setProvider("");
    setEditingPatient(null);
  }

  function handleCancel() {
    setEditingPatient(null);
    setName("");
    setInsurance("");
    setProvider("");
  }

  return (
    <div className="patient-form">
      <h2>
        {editingPatient ? "Edit Patient" : "Add New Patient"}
      </h2>

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
        text={editingPatient ? "Update Patient" : "Add Patient"}
        onClick={handleSubmit}
      />

      {editingPatient && (
        <button
          onClick={handleCancel}
          style={{
            width: "100%",
            marginTop: "10px",
            padding: "10px",
            border: "none",
            borderRadius: "6px",
            background: "#6c757d",
            color: "white",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      )}
    </div>
  );
}

export default AddPatientForm;