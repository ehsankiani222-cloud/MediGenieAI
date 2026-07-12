import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";

import "../styles/Claims.css";

function Claims() {
  return (
    <div>
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <PageHeader
          title="📄 Claims"
          subtitle="Manage Medical Claims"
        />

        <h2>Claims Module Coming Next 🚀</h2>
      </div>
    </div>
  );
}

export default Claims;