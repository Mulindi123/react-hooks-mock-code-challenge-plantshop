import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {
  const [name, setName]=useState("")
  const [image, setImage]= useState("")
  const [price, setPrice]= useState()
  
  function nameChange(e){
    setName(e.target.value)
  }

  function imageChange(e){
    setImage(e.target.value)
  }
  function priceChange(e){
    setPrice(e.target.value)
  }


  function submitForm(event){
    event.preventDefault()

    let newPlant={
      name:name,
      image:image,
      price:parseFloat(price).toFixed(2)
    }
    
    fetch("http://localhost:6001/plants",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then(data=>onAddPlant(data))
  }
 
 

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={submitForm}>
        <input type="text" name="name" placeholder="Plant name" onChange={nameChange} />
        <input type="text" name="image" placeholder="Image URL" onChange={imageChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price"onChange={priceChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
