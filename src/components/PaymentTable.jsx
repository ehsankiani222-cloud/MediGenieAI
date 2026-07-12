import { useContext } from "react";
import PaymentContext from "../context/PaymentContext";
import PaymentRow from "./PaymentRow";

function PaymentTable() {
  const { payments } = useContext(PaymentContext);

  return (
    <div className="patient-table">
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <PaymentRow
              key={payment.id}
              patient={payment.patient}
              amount={payment.amount}
              method={payment.method}
              status={payment.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTable;