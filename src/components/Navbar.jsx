import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h2>Dashboard</h2>

      <div className="navbar-right">
        <input
          type="text"
          placeholder="Search Patient..."
        />

        <span>🔔</span>

        <span>👤 Admin</span>
      </div>
    </div>
  );
}

export default Navbar;