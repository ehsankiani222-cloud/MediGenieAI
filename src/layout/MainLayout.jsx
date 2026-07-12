import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div>
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />
        {children}
      </div>
    </div>
  );
}

export default MainLayout;