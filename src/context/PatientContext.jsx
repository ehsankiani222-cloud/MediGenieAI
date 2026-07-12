import { createContext, useEffect, useState } from "react";
import patientsData from "../data/patients";

const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patients, setPatients] = useState(() => {
    const savedPatients = localStorage.getItem("patients");

    if (savedPatients) {
      return JSON.parse(savedPatients);
    }

    return patientsData;
  });

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  function addPatient(patient) {
    const newPatient = {
      id: Date.now(),
      ...patient,
      status: "Active",
    };

    setPatients((prev) => [...prev, newPatient]);
  }

  function deletePatient(id) {
    setPatients((prev) => prev.filter((patient) => patient.id !== id));
  }

  return (
    <PatientContext.Provider
      value={{
        patients,
        addPatient,
        deletePatient,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}

export default PatientContext;