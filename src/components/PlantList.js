import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] =useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res=>res.json())
    .then(data=>setPlants(data))
    .catch(error=>console.log(error))
  },[])

  return (
    <ul className="cards">
      {plants.map((plant)=>{
        return(
          <PlantCard plant={plant} />
        )
      })}
    </ul>
  );
}

export default PlantList;
