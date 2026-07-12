function PaymentRow({
  id,
  patient,
  amount,
  method,
  status,
  onDelete,
}) {
  return (
    <tr>
      <td>{patient}</td>
      <td>{amount}</td>
      <td>{method}</td>

      <td>
        <span
          style={{
            color:
              status === "Paid"
                ? "green"
                : "orange",
            fontWeight: "bold",
          }}
        >
          {status}
        </span>
      </td>

      <td>
        <button
          onClick={() => onDelete(id)}
          style={{
            background: "#e74c3c",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🗑 Delete
        </button>
      </td>
    </tr>
  );
}

export default PaymentRow;