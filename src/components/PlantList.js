import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, searchTerm}) {
 

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res=>res.json())
    .then(data=>setPlants(data))
    .catch(error=>console.log(error))
  },[])


  const filtered = plants.filter((plant)=>
  plant.name.toLowerCase().includes(searchTerm.toLowerCase())
 )


  return (
    <ul className="cards">
      {filtered.map((plant)=>{
        return(
          <PlantCard plant={plant} key={plant.id} />
        )
      })}
    </ul>
  );
}

export default PlantList;
