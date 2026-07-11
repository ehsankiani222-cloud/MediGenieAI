import "../styles/QuickActions.css";

function QuickActions() {
  return (
    <div className="quick-actions">
      <h2>Quick Actions</h2>

      <div className="action-buttons">
        <button>➕ Add Patient</button>
        <button>📄 New Claim</button>
        <button>💰 Payment</button>
        <button>🤖 Ask AI</button>
      </div>
    </div>
  );
}

export default QuickActions;