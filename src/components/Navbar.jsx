import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/auth/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff",
        padding: "15px 20px",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search..."
        style={{
          width: "250px",
          padding: "10px",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <span>
          👤 {user ? user.email : "Guest"}
        </span>

        <button
          onClick={handleLogout}
          style={{
            background: "#e74c3c",
            color: "white",
            border: "none",
            padding: "10px 15px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;