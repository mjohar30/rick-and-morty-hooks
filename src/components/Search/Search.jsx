import React from 'react';
import './search.css'

const Search = ({search, searchInput, handleSearch}) => {
  return (
    <div className="search">
      <h2>Busca un personaje:</h2>
      <input type="text" value={search} ref={searchInput} onChange={handleSearch}/>
    </div>
  );
};

export default Search;