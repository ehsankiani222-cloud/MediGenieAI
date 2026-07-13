function ActivityCard() {
  const activities = [
    "👤 New Patient Added",
    "📄 Claim Submitted",
    "💰 Payment Received",
    "🤖 AI Checked Claim",
    "📊 Report Generated",
  ];

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginTop: "30px",
      }}
    >
      <h2>Recent Activity</h2>

      {activities.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default ActivityCard;