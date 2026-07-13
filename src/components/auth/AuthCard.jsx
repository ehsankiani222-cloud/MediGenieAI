function AuthCard({ children }) {
  return (
    <div
      style={{
        width: "420px",
        background: "#ffffff",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.15)",
      }}
    >
      {children}
    </div>
  );
}

export default AuthCard;