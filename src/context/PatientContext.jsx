import { createContext, useEffect, useState } from "react";
import patientsData from "../data/patients";

const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : patientsData;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [editingPatient, setEditingPatient] = useState(null);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  function addPatient(patient) {
    setPatients((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...patient,
        status: "Active",
      },
    ]);
  }

  function deletePatient(id) {
    setPatients((prev) => prev.filter((p) => p.id !== id));
  }

  function editPatient(id) {
    const patient = patients.find((p) => p.id === id);
    setEditingPatient(patient);
  }

  function updatePatient(updatedPatient) {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === updatedPatient.id ? updatedPatient : patient
      )
    );

    setEditingPatient(null);
  }

  return (
    <PatientContext.Provider
      value={{
        patients,
        addPatient,
        deletePatient,
        editPatient,
        updatePatient,
        editingPatient,
        setEditingPatient,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}

export default PatientContext;