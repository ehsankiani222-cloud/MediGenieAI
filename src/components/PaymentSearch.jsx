import { useContext } from "react";
import PaymentContext from "../context/PaymentContext";
import "../styles/SearchBox.css";

function PaymentSearch() {
  const { searchTerm, setSearchTerm } = useContext(PaymentContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search Payment..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default PaymentSearch;