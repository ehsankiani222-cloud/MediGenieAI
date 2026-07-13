function TopPatients() {
  const patients = [
    "Ali Khan",
    "John Smith",
    "Sarah Lee",
    "Ahmed Hassan",
    "Fatima Noor",
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "30px",
      }}
    >
      <h2>Top Patients</h2>

      {patients.map((patient, index) => (
        <p key={index}>
          {index + 1}. {patient}
        </p>
      ))}
    </div>
  );
}

export default TopPatients;