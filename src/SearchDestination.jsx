import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchDestination() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const destinations = [
    { label: "Alleppey Backwaters", path: "/destinations/alleppey" },
    { label: "Munnar Hills", path: "/destinations/munnar" },
    { label: "Thekkady Wildlife", path: "/destinations/thekkady" },
    { label: "Kerala Waterfalls", path: "/destinations/waterfalls" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchInput.trim();
    if (!query) return;
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleUrl, "_blank", "noopener,noreferrer");
    setSearchInput("");
  };

  const handleQuickSelect = (path) => {
    navigate(path);
  };

  return (
    <div className="search_destination_section">
      <form onSubmit={handleSearch} className="search_form">
        <div className="search_input_wrapper">
          <input
            type="text"
            className="search_input"
            placeholder="Search destinations (e.g., Munnar, Alleppey, Thekkady...)"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type="submit" className="search_btn">
            <span>🔍 Search</span>
          </button>
        </div>
      </form>

      <div className="quick_destinations">
        <p className="quick_label">Popular Destinations:</p>
        <div className="destination_pills">
          {destinations.map((dest) => (
            <button
              key={dest.path}
              className="destination_pill"
              onClick={() => handleQuickSelect(dest.path)}
            >
              {dest.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
