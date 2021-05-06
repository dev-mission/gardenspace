import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Api from "../Api";

function AttendeeForm() {
  const {id} = useParams();
  const history = useHistory();
  const [attendee, setAttendee] = useState({
    name: '',
    slug: '',
    position: 0
  });

  //useEffect: Loads the function after 
  //Empty Parameter at the end of useEffect only load once.
  useEffect(function() {
    if(id){
      Api.attendee.get(id).then((response)=>{
        setAttendee(response.data)
      })
    }
  }, [])

  function onChange(event) {
    const newAttendee = {...attendee};
    newAttendee[event.target.name] = event.target.value;
    setAttendee(newAttendee);
  }

  async function onSubmit(event) {
    event.preventDefault();
    //If id exist from url path, update id and attendee else it will create a new attendee
    try {
      if(id){
        await Api.attendees.update(id, attendee)
      }else{
        await Api.attendees.create(attendee)
      }
      history.push('/attendee');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="container">
      <h1>Attendee Form</h1>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" type="text" name="name" value={attendee.name} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input className="form-control" type="text" name="slug" value={attendee.email} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input className="form-control" type="text" name="phoneNumber" value={attendee.phoneNumber} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input className="form-control" type="text" name="date" value={attendee.date} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Hour</label>
          <input className="form-control" type="text" name="hour" value={attendee.hour} onChange={onChange} />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      <p>{JSON.stringify(attendee)}</p>
    </main>
  );
}
export default AttendeeForm;