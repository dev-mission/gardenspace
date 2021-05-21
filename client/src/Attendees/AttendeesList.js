import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import Api from '../Api';

function AttendeeList() {
  const [attendee, setAttendee] = useState([]);

  useEffect(function() {
    Api.attendees.index().then(response => setAttendee(response.data));
  }, []);

  //Pass in attendee data in onDelete
  function onDelete(attendee){
    if(window.confirm(`Are you sure you wish to delete ${attendee.name}?`)){
      //We'll execute code to delete the attendee
      //Delete the api attendee with this id
      Api.attendees.delete(attendee.id).then(function(){
        const newAttendee = attendee.filter(a =>
          //We're filtering the attendees list, keeping every attendee that does not
          //match the one we're deleting
          a.id !== attendee.id
        )
        setAttendee(newAttendee)
      })
    }
  }

  return (
    <main className="container">
      <h1>Attendee List</h1>
      <Link className="btn btn-primary" to="/attendees/new">New</Link>
      <ul>
        {attendee.map(a => (
          <li>
            <p><Link to={`/attendees/${a.id}/edit`}>{a.name}, {a.email}, {a.phoneNumber}, {a.date}, {a.hour}</Link></p>
            <p><button onClick={()=> onDelete(a)} type="button" className="btn btn-sm btn-danger">Delete</button></p>
          </li>
        ))}
      </ul>
    </main>
  );
}
export default AttendeeList;