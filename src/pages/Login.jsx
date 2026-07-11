import "../styles/Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>MediGenie AI</h1>

        <h2>Sign In</h2>

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <button>Login</button>
      </div>
    </div>
  );
}

export default Login;