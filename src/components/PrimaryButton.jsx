import "../styles/PrimaryButton.css";

function PrimaryButton({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      className="primary-btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default PrimaryButton;