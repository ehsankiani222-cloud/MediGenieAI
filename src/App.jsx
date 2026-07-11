import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Claims from "./pages/Claims";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/claims" element={<Claims />} />
      <Route path="/payments" element={<Payments />} />
      <Route path="/reports" element={<Reports />} />
    </Routes>
  );
}

export default App;