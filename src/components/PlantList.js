import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants}) {
  const [isLoading, setLoading] = useState(false)
  
  {useEffect(() => {
    if(!isLoading) {
      setLoading(true)
      fetch('http://localhost:6001/plants')
      .then(resp => resp.json())
      .then(data => setPlants(data), [])
    }
  })}
  
  return (
    <ul className="cards">
      {plants.map((plant, index) => (
        <PlantCard
        key = {index}
        plant = {plant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
