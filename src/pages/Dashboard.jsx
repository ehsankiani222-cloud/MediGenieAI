import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import RecentClaims from "../components/RecentClaims";
import QuickActions from "../components/QuickActions";
import PatientContext from "../context/PatientContext";
import ClaimContext from "../context/ClaimContext";
import "../styles/Dashboard.css";

function Dashboard() {
  const { patients } = useContext(PatientContext);
  const { claims } = useContext(ClaimContext);

  const totalPatients = patients.length;
  const totalClaims = claims.length;

  const submittedClaims = claims.filter(
    (claim) => claim.status === "Submitted"
  ).length;

  const paidClaims = claims.filter(
    (claim) => claim.status === "Paid"
  ).length;

  return (
    <div>
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <h1>🏥 MediGenie AI Dashboard</h1>

        <h3>Welcome, Ehsan!</h3>

        <p>Medical Billing AI System</p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <StatCard
            title="Patients"
            value={totalPatients}
          />

          <StatCard
            title="Claims"
            value={totalClaims}
          />

          <StatCard
            title="Submitted"
            value={submittedClaims}
          />

          <StatCard
            title="Paid"
            value={paidClaims}
          />
        </div>

        <QuickActions />

        <RecentClaims />
      </div>
    </div>
  );
}

export default Dashboard;