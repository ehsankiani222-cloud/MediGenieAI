import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import { PatientProvider } from "./context/PatientContext";
import { ClaimProvider } from "./context/ClaimContext";
import { PaymentProvider } from "./context/PaymentContext";
import { AuthProvider } from "./context/auth/AuthContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <PatientProvider>
        <ClaimProvider>
          <PaymentProvider>
            <App />
          </PaymentProvider>
        </ClaimProvider>
      </PatientProvider>
    </AuthProvider>
  </BrowserRouter>
);