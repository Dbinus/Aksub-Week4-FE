export default function SearchBar({ value, onChange, onSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch();
  };
  return (
    <div className="search-group">
      <div className="search-input-wrap">
        <img src="../assets/search-icon.svg" alt="" style={{translate: "32px"}}/>
        <input
          type="text"
          className="search-input"
          placeholder="Search Products"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button className="btn-search" onClick={onSearch}>
        Search
      </button>
    </div>
  )
}
