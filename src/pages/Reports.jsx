import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";

import BarChart from "../components/charts/BarChart";
import PieChart from "../components/charts/PieChart";
import LineChart from "../components/charts/LineChart";

function Reports() {
  return (
    <div>
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <PageHeader
          title="📊 Reports"
          subtitle="Analytics & Business Overview"
        />

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "30px",
          }}
        >
          <StatCard title="Total Patients" value="125" />
          <StatCard title="Total Claims" value="48" />
          <StatCard title="Revenue" value="$12,500" />
          <StatCard title="Pending Claims" value="6" />
        </div>

        <BarChart />

        <PieChart />

        <LineChart />
      </div>
    </div>
  );
}

export default Reports;