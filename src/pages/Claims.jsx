import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import ClaimSearch from "../components/ClaimSearch";
import ClaimForm from "../components/ClaimForm";
import ClaimTable from "../components/ClaimTable";

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

        <ClaimSearch />

        <ClaimForm />

        <ClaimTable />
      </div>
    </div>
  );
}

export default Claims;