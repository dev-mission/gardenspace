import {useState, useEffect} from 'react';
import { useHistory, useParams } from "react-router-dom";
import Api from '../Api'

function GardenForm(){
    const {id} = useParams();
    const history = useHistory();
    const [garden, setGarden] = useState({
        name: '',
        email: '',
        phoneNumber: 0,
        hoursOpenings: {},
        location: '',
        lat: 0,
        long: 0,
    });


    useEffect(()=>{
        if(id){
            Api.gardens.get(id).then((response)=>{
                setGarden(response.data)
            })
        }
    }, [id]);

    const onChange = (event) => {
        const newGarden = {...garden};
        newGarden[event.target.name] = event.target.value
        setGarden(newGarden);
    }

    async function onSubmit(event){
        event.preventDefault()
        try{
            if(id){
                await Api.gardens.update(id, garden)
            }else{
                await Api.gardens.create(garden)
            }
            history.push('/gardens')
        }catch(error){
            console.log(error)
        }
    }

    return (
        <main className="container">
            <h1>Garden Form</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" type="text" name="name" value={garden.name} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="text" name="email" value={garden.email} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input className="form-control" type="text" name="phoneNumber" value={garden.phoneNumber} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Hours</label>
          <input className="form-control" type="text" name="hoursOpen" value={garden.hoursOpening} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Locatiion</label>
          <input className="form-control" type="text" name="location" value={garden.location} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Latitude</label>
          <input className="form-control" type="text" name="lat" value={garden.lat} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Longitude</label>
          <input className="form-control" type="text" name="long" value={garden.long} onChange={onChange} />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      <p>{JSON.stringify(garden)}</p>
    </main>
    )
}

export default GardenForm