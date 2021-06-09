import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Api from '../Api';

function PlantsList(){
    const [plants, setPlants] = useState([]);
    useEffect(function(){
      Api.plants.index().then(response => setPlants(response.data));  
    }, []);

    function onDelete(plant){
      if (window.confirm(`Are you sure you wish to delete ${plant.name}?`)){
        Api.plants.delete(plant.id).then(function(){
          
          const newPlants = plants.filter(s => s.id !== plant.id);
          setPlants(newPlants);
        });
      }
    }
    return(
      //display
        <main className="continer">
            <h1>Plants List</h1>
            <Link className="btn btn-primary" to="/plants/new">New</Link>
            <ul>
              {plants.map(s =>(
                  <li key={s.id}>
                    <p><Link to={`/plants/${s.id}/edit`}>{s.name},{s.description},{s.color},{s.species},{s.location},{s.season},{s.nativeTo}</Link></p>
                    <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                  </li>
              ))}
            </ul>
        </main>
    );

}
export default PlantsList;