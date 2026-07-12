import { createContext, useState } from "react";
import paymentsData from "../data/payments";

const PaymentContext = createContext();

export function PaymentProvider({ children }) {
  const [payments, setPayments] = useState(paymentsData);

  return (
    <PaymentContext.Provider
      value={{
        payments,
        setPayments,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
}

export default PaymentContext;