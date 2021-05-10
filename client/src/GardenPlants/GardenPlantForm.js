import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import Api from "../Api";

function GardenPlantForm() {
    const { id } = useParams();
    const history = useHistory();
    const [gardens, setGardens] = useState([]);
    const [plants, setPlants] = useState([]);
    const [gardenplant, setGardenPlant] = useState({
        GardenId: '',
        PlantId: '',
    });

    useEffect(function () {
        Promise.all([Api.gardens.index(), Api.plants.index()]).then((responses) => {
            setGardens(responses[0].data);
            setPlants(responses[1].data);
            if (id) {
                Api.gardenplants.get(id).then((response) => {
                    setGardenPlant(response.data);
                });
            } else {
                const newGardenPlant = { ...gardenplant };
                if (responses[0].data.length > 0 && gardenplant.GardenId === '') {
                    newGardenPlant.GardenId = responses[0].data[0].id;
                }
                if (responses[1].data.length > 0 && gardenplant.PlantId === '') {
                    newGardenPlant.PlantId = responses[1].data[0].id;
                }
                setGardenPlant(newGardenPlant);
            }
        });
    }, [id]);

    function onChange(event) {
        const newGardenPlant = { ...gardenplant };
        newGardenPlant[event.target.name] = event.target.value;
        setGardenPlant(newGardenPlant);
    }
    async function onSubmit(event) {
        event.preventDefault();
        try {
            if (id) {
                await Api.gardenplants.update(id, gardenplant);
            } else {
                await Api.gardenplants.create(gardenplant);
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
                    <select className="form-control" name="GardenId" value={gardenplant.GardenId} onChange={onChange}>
                        {gardens.map((g) => <option value={g.id}>{g.name}</option>)}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="from-label">PlantId</label>
                    <select className="form-control" name="PlantId" value={gardenplant.PlantId} onChange={onChange}>
                        {plants.map((p) => <option value={p.id}>{p.name}</option>)}
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
            <p>{JSON.stringify(gardenplant)}</p>
        </main>
    );
}
export default GardenPlantForm;
