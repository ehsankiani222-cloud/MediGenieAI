import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../../context/auth/AuthContext";

function LoginForm() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }

    login(email);

    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
        }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "20px",
        }}
      />

      <button
        style={{
          width: "100%",
          padding: "12px",
          background: "#2563eb",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;