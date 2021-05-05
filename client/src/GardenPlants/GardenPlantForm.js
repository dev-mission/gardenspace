import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Api from "../Api";

function GardenPlantForm(){
    const {id} = useParams();
    const history = useHistory();
    const [gardenplant, setGardenPlant] = useState({
        GardenId:'',
        PlantId:'',
    });
  useEffect(function(){
     if (id) {
         Api.gardenplants.get(id).then((response) => setGardenPlant(response.data));
     }
  }, []);

function onChange(event){
    const newGardenPlant = {...gardenplant};
    newGardenPlant[event.target.name] = event.target.value;
    setGardenPlant(newGardenPlant);
}
async function onSubmit(event){
    event.preventDefault();
    try{
        if (id){
          await Api.gardenplants.update(id, gardenplant);   
        } else{
            await Api.gardenplants.create(id, gardenplant);
        }
        history.push('/gardenplants')
    } catch (error) {
        console.log(error);
    }
}
    return (
        <main className="container">
        <h1>Garden Plant Form</h1>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="from-label">GardenId</label>
                <input className="form-control" type="text" name="GardenId" value={gardenplant.GardenId}  onChange={onChange} />
            </div>
            <div className="mb-3">
                <label className="from-label">PlantId</label>
                <input className="form-control" type="text" name="PlantId" value={gardenplant.name} onChange={onChange} />
            </div>
            
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        <p>{JSON.stringify(gardenplant)}</p>
        </main>
    );
}
export default GardenPlantForm;
