import React, { useState} from "react";

function PlantCard(plant) {
  const [inStock, setInStock] = useState(true)

  function toggleStock() {
    setInStock(!inStock)
  }
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.plant.image} alt={"plant name"} />
      <h4>{plant.plant.name}</h4>
      <p>Price: {plant.plant.price}</p>
      {inStock ? (
        <button className="primary" onClick={toggleStock}>In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
