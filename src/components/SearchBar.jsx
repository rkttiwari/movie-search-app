import { useState } from 'react';
import './SearchBar.css'; // ⬅️ Add a CSS file for styles

function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <header className="header">
      <div className="logo">🎬 MovieDB</div>
      <form onSubmit={handleSubmit} className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">🔍</button>
      </form>
    </header>
  );
}

export default SearchBar;
