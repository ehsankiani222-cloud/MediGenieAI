function ClaimRow({ patient, dos, cpt, amount, status }) {
  return (
    <tr>
      <td>{patient}</td>
      <td>{dos}</td>
      <td>{cpt}</td>
      <td>{amount}</td>
      <td>
        <span
          style={{
            color:
              status === "Paid"
                ? "green"
                : status === "Denied"
                ? "red"
                : "orange",
            fontWeight: "bold",
          }}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}

export default ClaimRow;