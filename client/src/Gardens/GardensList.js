import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import Api from '../Api';

function GardensList() {
    const [garden, setGarden] = useState([]);

    useEffect(()=>{
        Api.gardens.index().then(
            (response)=>{
                setGarden(response.data);
            }
        );
    }, []);

    const onDelete = (garden) => {
        if(window.confirm(`Are you sure you want ot delete ${garden.name}?`)){
            Api.gardens.delete(garden.id).then(() => {
                const newGarden = garden.filter((g) => g.id !== garden.id)
                setGarden(newGarden)
            });
        }
    }

    return(
        <main className="container">
            <h1>Garden List</h1>
            <Link className="btn btn-primary" to="/gardens/new">New</Link>
            <ul>
                {garden.map(g => (
                    <li key={g.id}>
                        <p><Link to={`/gardens/${g.id}/edit`}>{g.name}, {g.email}, {g.phoneNumber}, {g.hoursOpening}, {g.location}, {g.lat}, {g.long}</Link></p>
                        <p><button onClick={()=> onDelete(g)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default GardensList;
