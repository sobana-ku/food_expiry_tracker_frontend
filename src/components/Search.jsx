
import React from 'react';

function Search({ onSearch }) {
  return (
    <input type="text" placeholder="Search..." onChange={(e) => onSearch(e.target.value)} />
  );
}

export default Search;


