import { useContext } from "react";
import ClaimContext from "../context/ClaimContext";
import ClaimRow from "./ClaimRow";
import "../styles/ClaimTable.css";

function ClaimTable() {
  const { claims, searchTerm } = useContext(ClaimContext);

  const filteredClaims = claims.filter((claim) =>
    claim.patient.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="patient-table">
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>DOS</th>
            <th>CPT</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {filteredClaims.map((claim) => (
            <ClaimRow
              key={claim.id}
              patient={claim.patient}
              dos={claim.dos}
              cpt={claim.cpt}
              amount={claim.amount}
              status={claim.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClaimTable;