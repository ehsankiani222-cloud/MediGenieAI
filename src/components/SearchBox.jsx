import { useContext } from "react";
import PatientContext from "../context/PatientContext";
import "../styles/SearchBox.css";

function SearchBox() {
  const { searchTerm, setSearchTerm } = useContext(PatientContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search Patient..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;