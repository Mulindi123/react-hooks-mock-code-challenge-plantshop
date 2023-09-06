import React, { useState } from "react";


const UpdatePlant = ({plantId}) => {
    const [newPrice, setNewPrice] = useState("")

    function handlePriceUpdate(){
        fetch(`http://localhost:6001/plants/${plantId}`,{
            method:"PATCH",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({price: newPrice})
        })
        .then(r=>r.json())
        .then(data=>setNewPrice(data))
        .catch(error=>console.log(error))

    }
    return ( <div>
        <form>
            <input type="text"
            placeholder="Enter new Price" 
            value={newPrice}
            onChange={(e)=>setNewPrice(e.target.value)}
            />
            <button onClick={handlePriceUpdate}>Update Price</button>
        </form>
    </div> );
}
 
export default UpdatePlant;