import { useContext } from "react";
import PaymentContext from "../context/PaymentContext";
import PaymentRow from "./PaymentRow";

function PaymentTable() {
  const {
    payments,
    searchTerm,
    deletePayment,
  } = useContext(PaymentContext);

  const filteredPayments = payments.filter((payment) =>
    payment.patient
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="patient-table">
      <table>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredPayments.map((payment) => (
            <PaymentRow
              key={payment.id}
              id={payment.id}
              patient={payment.patient}
              amount={payment.amount}
              method={payment.method}
              status={payment.status}
              onDelete={deletePayment}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTable;