import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Api from '../Api';

function GardenPlantsList(){
    const [gardenplants, setGardenPlants] = useState([]);
    useEffect(function(){
      Api.gardenplants.index().then(response => setGardenPlants(response.data));  
    }, []);

    function onDelete(gardenplant){
      if (window.confirm(`Are you sure you wish to delete ${gardenplant.name}?`)){
        Api.gardenplants.delete(gardenplant.id).then(function(){
          
          const newGardenPlants = gardenplants.filter(s => s.id !== gardenplant.id);
          setGardenPlants(newGardenPlants);
        });
      }
    }
    return(
      //display
        <main className="continer">
            <h1>Garden Plants List</h1>
            <Link className="btn btn-primary" to="/gardenplants/new">New</Link>
            <ul>
              {gardenplants.map(s =>(
                  <li>
                    <p><Link to={`/gardenplants/${s.id}/edit`}>{s.Garden.name} has {s.Plant.name}</Link></p>
                    <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                  </li>
              ))}
            </ul>
        </main>
    );

}
export default GardenPlantsList;