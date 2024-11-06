import React, { useState } from "react";

function NewPlantForm({plants, setPlants}) {
  
  function addPlant(e) {
    e.preventDefault()
    const newPlant = {
      name: e.target.name.value,
      image: e.target.image.value,
      price: e.target.price.value
    }
    fetch('http://localhost:6001/plants', {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
    },
    bod: JSON.stringify(newPlant)})
    .then(() => {
      fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => setPlants(data))
    })
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addPlant}>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
