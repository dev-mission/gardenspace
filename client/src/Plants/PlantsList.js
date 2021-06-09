import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Api from '../Api';
import './PlantsList.scss';

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
    
      
        <main className="container">
            <h1>Plants List</h1>
            <div class="addNew">
            <Link className="btn btn-primary" class="btn btn-success" to="/plants/new">Add New Plants</Link>
            </div>
            {/*
            <div class="row">
            <div class="col-sm-6">
        <div className= "container">
            {/*<ul>*/}
              {/*{plants.map(s =>(
                  <div className="col-md-4" key={s.id}> */}
        {/*<div class="card">
          <img class="card-img-top" src="..." alt="Card image cap"/>
            <div class="card-body">*/}
           {/* <div class="content">
              <p><Link to={`/plants/${s.id}/edit`}>{s.name},{s.description},{s.color},{s.species},{s.location},{s.season},{s.nativeTo}</Link></p>
            </div>
            <p><button onClick={() => onDelete(s)} type="button"  id="delete">🗑️</button></p>
          </div>
        </div>
                  </div>

              ))} */}
              {/*</ul>*/}
        {/* </div>
         </div>
         </div> */}
          
        </main>
    
    );

}

export default PlantsList;