import { useContext } from "react";
import ClaimContext from "../context/ClaimContext";
import "../styles/ClaimSearch.css";

function ClaimSearch() {
  const { searchTerm, setSearchTerm } = useContext(ClaimContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search Claim..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default ClaimSearch;