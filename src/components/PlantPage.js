import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] =useState([])
  const [searchTerm, setSearchTerm] =useState("")


  function addPlant(Plant){
    const newPlants=[...plants,Plant]
    setPlants(newPlants)
    // console.log(plants)
  }

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} setPlants={setPlants} searchTerm={searchTerm} />
    </main>
  );
}

export default PlantPage;
