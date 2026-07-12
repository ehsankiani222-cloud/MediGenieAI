import { createContext, useState } from "react";
import patientsData from "../data/patients";

const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patients, setPatients] = useState(patientsData);
  const [searchTerm, setSearchTerm] = useState("");

  function addPatient(patient) {
    const newPatient = {
      id: Date.now(),
      ...patient,
      status: "Active",
    };

    setPatients((prev) => [...prev, newPatient]);
  }

  return (
    <PatientContext.Provider
      value={{
        patients,
        addPatient,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}

export default PatientContext;