import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";

import PaymentSearch from "../components/PaymentSearch";
import PaymentForm from "../components/PaymentForm";
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

        <PaymentSearch />

        <PaymentForm />

        <PaymentTable />
      </div>
    </div>
  );
}

export default Payments;