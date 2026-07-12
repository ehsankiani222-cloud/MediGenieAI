import { createContext, useEffect, useState } from "react";
import paymentsData from "../data/payments";

const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem("payments");
    return saved ? JSON.parse(saved) : paymentsData;
  });

  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <PaymentContext.Provider
      value={{
        payments,
        addPayment,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export default PaymentContext;