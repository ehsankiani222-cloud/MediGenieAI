function PatientRow({ name, insurance, provider, status }) {
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
    </tr>
  );
}

export default PatientRow;