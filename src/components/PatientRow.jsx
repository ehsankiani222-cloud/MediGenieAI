function PaymentRow({
  id,
  patient,
  amount,
  method,
  status,
  onDelete,
  onEdit,
}) {
  return (
    <tr>
      <td>{patient}</td>
      <td>{amount}</td>
      <td>{method}</td>
      <td>
        <span
          style={{
            color: status === "Paid" ? "green" : "orange",
            fontWeight: "bold",
          }}
        >
          {status}
        </span>
      </td>

      <td>
        <button
          onClick={() => onEdit(id)}
          style={{
            background: "#3498db",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            marginRight: "8px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          ✏️ Edit
        </button>

        <button
          onClick={() => onDelete(id)}
          style={{
            background: "#e74c3c",
            color: "#fff",
            border: "none",
            padding: "6px 10px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          🗑 Delete
        </button>
      </td>
    </tr>
  );
}

export default PaymentRow;