import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PatientProvider } from "./context/PatientContext";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PatientProvider>
      <App />
    </PatientProvider>
  </BrowserRouter>
);