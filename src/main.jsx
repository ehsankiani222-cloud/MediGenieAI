import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

import { PatientProvider } from "./context/PatientContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PatientProvider>
      <App />
    </PatientProvider>
  </BrowserRouter>
);