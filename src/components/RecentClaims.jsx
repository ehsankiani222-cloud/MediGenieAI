import "../styles/RecentClaims.css";

function RecentClaims() {
  return (
    <div className="claims-box">
      <h2>Recent Claims</h2>

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
          <tr>
            <td>John Smith</td>
            <td>07/10/2026</td>
            <td>99213</td>
            <td>$120</td>
            <td>Submitted</td>
          </tr>

          <tr>
            <td>Sarah Lee</td>
            <td>07/10/2026</td>
            <td>93000</td>
            <td>$80</td>
            <td>Paid</td>
          </tr>

          <tr>
            <td>Ali Khan</td>
            <td>07/10/2026</td>
            <td>99214</td>
            <td>$150</td>
            <td>Denied</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RecentClaims;