import { useContext } from "react";
import PatientContext from "../context/PatientContext";
import "../styles/PatientTable.css";
import PatientRow from "./PatientRow";

function PatientTable() {
  const { patients } = useContext(PatientContext);

  return (
    <div className="patient-table">
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Insurance</th>
            <th>Provider</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <PatientRow
              key={patient.id}
              name={patient.name}
              insurance={patient.insurance}
              provider={patient.provider}
              status={patient.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;