import { createContext, useEffect, useState } from "react";
import paymentsData from "../data/payments";

const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem("payments");
    return saved ? JSON.parse(saved) : paymentsData;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [editingPayment, setEditingPayment] = useState(null);

  useEffect(() => {
    localStorage.setItem("payments", JSON.stringify(payments));
  }, [payments]);

  function addPayment(payment) {
    setPayments((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...payment,
        status: "Paid",
      },
    ]);
  }

  function deletePayment(id) {
    setPayments((prev) =>
      prev.filter((payment) => payment.id !== id)
    );
  }

  function updatePayment(updatedPayment) {
    setPayments((prev) =>
      prev.map((payment) =>
        payment.id === updatedPayment.id
          ? updatedPayment
          : payment
      )
    );

    setEditingPayment(null);
  }

  return (
    <PaymentContext.Provider
      value={{
        payments,
        addPayment,
        deletePayment,
        updatePayment,
        editingPayment,
        setEditingPayment,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export default PaymentContext;