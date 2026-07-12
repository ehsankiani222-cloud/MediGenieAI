import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import PaymentTable from "../components/PaymentTable";

import "../styles/Payments.css";

function Payments() {
  return (
    <div>
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <PageHeader
          title="💰 Payments"
          subtitle="Manage Patient Payments"
        />

        <PaymentTable />
      </div>
    </div>
  );
}

export default Payments;