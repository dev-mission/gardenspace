import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Api from "../Api";

function PlantForm(){
    const {id} = useParams();
    const history = useHistory();
    const [plant, setPlant] = useState({
        name: '',
        slug: '',
        position: 0
    });
  useEffect(function(){
     if (id) {
         Api.plants.get(id).then((response) => setPlant(response.data));
     }
  }, []);

function onChange(event){
    const newPlant = {...plant};
    newPlant[event.target.name] = event.target.value;
    setPlant(newPlant);
}
async function onSubmit(event){
    event.preventDefault();
    try{
        if (id){
          await Api.plants.update(id, plant);   
        } else{
            await Api.plants.create(id, plant);
        }
        history.push('/plants')
    } catch (error) {
        console.log(error);
    }
}
    return (
        <main className="container">
        <h1>Sections Form</h1>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label className="from-label">Name</label>
                <input className="form-control" type="text" name="name" value={plant.name}  onChange={onChange} />
            </div>
            <div className="mb-3">
                <label className="from-label">Slug</label>
                <input className="form-control" type="text" name="slug" value={plant.slug} onChange={onChange} />
            </div>
            <div className="mb-3">
                <label className="from-label">Position</label>
                <input className="form-control" type="text" name="position" value={plant.position} onChange={onChange} />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
        </form>
        <p>{JSON.stringify(plant)}</p>
        </main>
    );
}
export default PlantForm;
