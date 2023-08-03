import React, { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [googleLink, setGoogleLink] = useState([]);
console.log(googleLink);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (e,startIndex) => {
    console.log('Search Query:', query);
    console.log('Search Query:', startIndex);
    try {
      const encodedQuery = encodeURIComponent(query);
      const cxId = '47f01da3cd66d4903'; 
      const apiKey = 'AIzaSyCXis9_luVytdEYyrUHxfJ9k8Us2i7n4pM';
      const response = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cxId}&q=${encodedQuery}&start=${startIndex}`
      );
      const data = await response.json();
      console.log(data);
      const links = data.items.map((item) => item.link);
      setGoogleLink((prev) => [...prev, ...links]);
    } catch (error) {
      console.log("Error",error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  //  fetched 100 google data
  const fetchedHundread = (e) =>{
    let startIndex = 0
    setGoogleLink([])
    for(let i=0; i < 2; i++) {
      handleSearch(e,startIndex)
      startIndex+=10;
      console.log("inside", startIndex);
    }
  }
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
      <button className="search-button" onClick={fetchedHundread}>
        Search
      </button>
    </div>
    </div>

  );
};

export default SearchBar;
