import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Api from "../Api";

function PlantForm() {
    const { id } = useParams();
    const history = useHistory();
    const [plant, setPlant] = useState({
        name: '',
        description: '',
        color: '',
        species: '',
        location: '',
        season: '',
        nativeTo: '',
    });

    useEffect(function () {
        if (id) {
            Api.plants.get(id).then((response) => setPlant(response.data));
        }
    }, [id]);

    function onChange(event) {
        const newPlant = { ...plant };
        newPlant[event.target.name] = event.target.value;
        setPlant(newPlant);
    }
    async function onSubmit(event) {
        event.preventDefault();
        try {
            if (id) {
                await Api.plants.update(id, plant);
            } else {
                await Api.plants.create(plant);
            }
            history.push('/plants')
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <main className="container">
            <h1>Plant Form</h1>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="from-label">Name</label>
                    <input className="form-control" type="text" name="name" value={plant.name} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="from-label">Description</label>
                    <input className="form-control" type="text" name="description" value={plant.description} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="from-label">Color</label>
                    <input className="form-control" type="text" name="color" value={plant.color} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="from-label">Species</label>
                    <input className="form-control" type="text" name="species" value={plant.species} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="from-label">Location</label>
                    <input className="form-control" type="text" name="location" value={plant.location} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="from-label">Season</label>
                    <input className="form-control" type="text" name="season" value={plant.season} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label className="from-label">NativeTo</label>
                    <input className="form-control" type="text" name="nativeTo" value={plant.nativeTo} onChange={onChange} />
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(plant)}</p>
        </main>
    );
}
export default PlantForm;
