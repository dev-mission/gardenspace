import {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import Api from "../Api"

function ProfileForm(){
    const {id} = useParams();
    const history = useHistory();
    const [profile, setProfile] = useState({
        UserId: 0,
        name: "",
        location: "",
        description: "",
        hour: 0,
        phoneNumber: 0,
        date: 0
    })

    useEffect(function(){
        if(id){
            Api.profiles.get(id).then((response)=>{
                setProfile(response.data)
            })
        }
    }, [])

    function onChange(event){
        const newProfile = {...profile};
        newProfile[event.target.name] = event.target.value
        setProfile(newProfile);
    }

    async function onSubmit(event){
        event.preventDefault();

        try{
            if(id){
                await Api.profiles.update(id, profile)
            }else{
                await Api.profiles.create(profile)
            }
            history.push('/profiles')
        }catch(error){
            console.log(error)
        }
    }

    return (
        <main className="container">
          <h1>Profile Form</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input className="form-control" type="text" name="name" value={profile.name} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Location</label>
              <input className="form-control" type="text" name="location" value={profile.location} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input className="form-control" type="text" name="description" value={profile.description} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Hour</label>
              <input className="form-control" type="text" name="hour" value={profile.hour} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input className="form-control" type="text" name="phoneNumber" value={profile.phoneNumber} onChange={onChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Date</label>
              <input className="form-control" type="text" name="date" value={profile.date} onChange={onChange} />
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>
          <p>{JSON.stringify(profile)}</p>
        </main>
      );
}

export default ProfileForm;