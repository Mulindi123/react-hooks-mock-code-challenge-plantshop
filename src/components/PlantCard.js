import React, { useState } from "react";

function PlantCard({plant}) {
  const [isInStock, setIsInStock] = useState(true)

  function toggleIsInStock(){
    setIsInStock(!isInStock)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button className={`primary ${isInStock? "In Stock": "Out of Stock"}`}
              onClick={toggleIsInStock}
      >
         {isInStock ? "In Stock": "Out of Stock"}     
      </button>
    </li>
  );
}

export default PlantCard;
