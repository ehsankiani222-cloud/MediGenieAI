import "../styles/SearchBox.css";

function SearchBox() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        className="search-box"
        type="text"
        placeholder="🔍 Search Patient..."
      />
    </div>
  );
}

export default SearchBox;