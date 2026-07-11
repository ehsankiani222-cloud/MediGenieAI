import { createContext, useState } from "react";
import patientsData from "../data/patients";

const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patients, setPatients] = useState(patientsData);

  function addPatient(patient) {
    setPatients((prev) => [...prev, patient]);
  }

  return (
    <PatientContext.Provider
      value={{
        patients,
        addPatient,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}

export default PatientContext;