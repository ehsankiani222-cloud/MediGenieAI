import { useContext } from "react";
import PatientContext from "../context/PatientContext";
import "../styles/PatientTable.css";
import PatientRow from "./PatientRow";

function PatientTable() {
  const { patients, searchTerm } = useContext(PatientContext);

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          {filteredPatients.map((patient) => (
            <PatientRow
              key={patient.id}
              name={patient.name}
              insurance={patient.insurance}
              provider={patient.provider}
              status={patient.status}
            />
          ))}

          {filteredPatients.length === 0 && (
            <tr>
              <td
                colSpan="4"
                style={{ textAlign: "center", padding: "20px" }}
              >
                No patient found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PatientTable;