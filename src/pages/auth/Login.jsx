import AuthCard from "../../components/auth/AuthCard";
import LoginForm from "../../components/auth/LoginForm";

function Login() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f6f9",
      }}
    >
      <AuthCard>
        <h1
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          🏥 MediGenie AI
        </h1>

        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Login
        </h2>

        <LoginForm />
      </AuthCard>
    </div>
  );
}

export default Login;