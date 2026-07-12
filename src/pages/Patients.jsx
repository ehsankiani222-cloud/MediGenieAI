import MainLayout from "../layout/MainLayout";
import PageHeader from "../components/PageHeader";
import SearchBox from "../components/SearchBox";
import AddPatientForm from "../components/AddPatientForm";
import PatientList from "../components/PatientList";
import "../styles/Patients.css";

function Patients() {
  return (
    <MainLayout>
      <PageHeader
        title="👥 Patients"
        subtitle="Manage all registered patients"
      />

      <SearchBox />

      <AddPatientForm />

      <PatientList />
    </MainLayout>
  );
}

export default Patients;