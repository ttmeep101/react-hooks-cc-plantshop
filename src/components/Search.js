import React, { useState } from "react";

function Search({plants, setPlants}) {
  function updateSearch(e){
    fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => {
      const filteredPlants = data.filter(data => data.name.toLowerCase().includes(e.target.value.toLowerCase()))
      setPlants(filteredPlants)
    })
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => updateSearch(e)}
      />
    </div>
  );
}

export default Search;
