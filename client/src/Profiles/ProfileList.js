import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import Api from '../Api';

function ProfileList(){
    const [profile, setProfile] = useState([]);

    useEffect(function() {
        Api.profiles.index().then((response) => {
            setProfile(response.data)
        })
    }, [])

    function onDelete(profile){
        if(window.confirm(`Are you sure you wish to delete ${profile.name}?`)){
   
            Api.profiles.delete(profile.id).then(function(){
              const newProfile = profile.filter(p=>
            
                p.id !== profile.id
              )
              setProfile(newProfile)
            })
          }
    }

    return(
        <main className="container">
            <h1>Profile List</h1>
            <Link className="btn btn-primary" to="/profiles/new">New</Link>
            <ul>
                {profile.map(p => (
                    <li>
                        <p><Link to={`/profiles/${p.id}/edit`}>{p.name}, {p.location}, {p.description}, {p.hour}, {p.phoneNumber}, {p.date}</Link></p>
                        <p><button onClick={()=> onDelete(p)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
                    </li>   
                ))}
            </ul>
        </main>
    )
}
export default ProfileList;