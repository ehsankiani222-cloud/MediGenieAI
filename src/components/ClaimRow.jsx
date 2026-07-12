function ClaimRow({
  id,
  patient,
  dos,
  cpt,
  amount,
  status,
  onDelete,
  onEdit,
}) {
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

      <td>
        <button
          onClick={() => onEdit(id)}
          style={{
            background: "#3498db",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            marginRight: "8px",
            cursor: "pointer",
          }}
        >
          ✏️ Edit
        </button>

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

export default ClaimRow;