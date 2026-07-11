import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>MediGenie AI</h2>

      <ul>
        <li>
          <Link to="/">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/patients">👥 Patients</Link>
        </li>

        <li>
          <Link to="/claims">📄 Claims</Link>
        </li>

        <li>
          <Link to="/payments">💰 Payments</Link>
        </li>

        <li>
          <Link to="/reports">📊 Reports</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;