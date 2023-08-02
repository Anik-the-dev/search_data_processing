import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
console.log(query);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    console.log('Search Query:', query);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='main-container'>
    <h1 className='head-title'><span>Custom</span> Search Bar</h1>
    <div className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyDown ={handleKeyPress}
        className="search-bar-input"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
    </div>
    </div>

  );
};

export default SearchBar;
