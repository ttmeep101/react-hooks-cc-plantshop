import React, { useState } from "react";

function NewPlantForm({plants, setPlants}) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState('')

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
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPlant)})
    .then(() => {
      fetch('http://localhost:6001/plants')
    .then(resp => resp.json())
    .then(data => {
      setPlants(data)
      setName('')
      setImage('')
      setPrice('')
    })})
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={addPlant}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={(e) => setPrice(parseInt(e.target.value))}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
