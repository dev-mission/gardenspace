import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Api from '../Api';

function PlantList(){
    const [plants, setPlants] = useState([]);
    useEffect(function(){
      Api.plants.index().then(response => setPlants(response.data));  
    }, []);

    function onDelete(section){
      if (window.confirm(`Are you sure you wish to delete ${plant.name}?`)){
        //we'll execute code to delete the section
        Api.plants.delete(plant.id).then(function(){
          // we're filtering the sections list, keeping every section that does not 
          //match the one we're deleting
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
                  <li>
                    <p><Link to={`/plants/${s.id}/edit`}>{s.name},{s.slug},{s.position}</Link></p>
                    <p><button onClick={() => onDelete(s)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                  </li>
              ))}
            </ul>
        </main>
    );

}
export default PlantList;