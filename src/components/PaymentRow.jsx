function PaymentRow({
  patient,
  amount,
  method,
  status,
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
    </tr>
  );
}

export default PaymentRow;