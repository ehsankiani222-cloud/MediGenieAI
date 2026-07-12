function PatientRow({
  id,
  name,
  insurance,
  provider,
  status,
  onDelete,
}) {
  return (
    <tr>
      <td>{name}</td>
      <td>{insurance}</td>
      <td>{provider}</td>

      <td>
        <span
          style={{
            color: status === "Active" ? "green" : "orange",
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

export default PatientRow;