import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] =useState([])

  function addPlant(Plant){
    const newPlants=[...plants,Plant]
    setPlants(newPlants)
    // console.log(plants)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search />
      <PlantList plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;
