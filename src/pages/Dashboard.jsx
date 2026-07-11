import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import RecentClaims from "../components/RecentClaims";
import QuickActions from "../components/QuickActions";
import "../styles/Dashboard.css";

function Dashboard() {
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
          <StatCard title="Patients" value="125" />
          <StatCard title="Claims" value="48" />
          <StatCard title="Payments" value="$12,500" />
          <StatCard title="Denials" value="6" />
        </div>

        <QuickActions />

        <RecentClaims />
      </div>
    </div>
  );
}

export default Dashboard;