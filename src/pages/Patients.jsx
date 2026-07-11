import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import SearchBox from "../components/SearchBox";
import AddPatientForm from "../components/AddPatientForm";
import PatientList from "../components/PatientList";
import "../styles/Patients.css";

function Patients() {
  return (
    <div>
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <PageHeader
          title="👥 Patients"
          subtitle="Manage all registered patients"
        />

        <SearchBox />

        <AddPatientForm />

        <PatientList />
      </div>
    </div>
  );
}

export default Patients;