import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import './Header.scss';
import './PlantlibschO.scss';

function PlantlibschO(){

    const history = useHistory();
    const {user, setUser} = useAuthContext();
  
    useEffect(function() {
      Api.users.me()
        .then(response => {
          if (response.status === 204) {
            setUser(null);
          } else {
            setUser(response.data);
          }
        });
    }, [setUser]);
  
    const onLogout = async function(event) {
      event.preventDefault();
      await Api.auth.logout();
      setUser(null);
      history.push('/');
    };

    return(
        <div class="container body-container">
            <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <div className="container">
                <a class="navbar-brand" href="/">
                    <img src={Logo} alt="Logo" width="50.53" height="50.53" class="d-inline-block align-text-top" />
                </a>
            <Link className="navbar-brand" to="/" id="HeaderTitle">GardenSpace</Link>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link className="nav-link" aria-current="page" to="/ProfileO">Garden Profile</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link" aria-current="page" to="/PlantlibO">Plant Library</Link>
                  </li>
                  <li class="nav-item" style={{backgroundColor: "#2A936D"}}>
                    <Link className="nav-link" aria-current="page" to="/PlantlibschO" style={{color: "white"}}>Schedule</Link>
                  </li>
                </ul>
              </div>
            </div>
            <input type="button" class="btn btn-outline-dark" value="Log Out" onClick="/login"/>
            </div>
            </nav>
            <div class="container" id="calendar">
                <div className="col-md-12">
                    <div className="" id="addPlant">
                        <button class="btn btn btn-success" type="button" id="button-addon2">Add new plants</button>
                    </div>
                    <h1 id="schedule-title">Schedule</h1>
                    <div class="container getinvolvedcal">
                        <div className="col-md-2.5">
                            <p></p>
                            <h3>&lt;</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 4.</p>
                            <h3>Mon</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 5.</p>
                            <h3>Tue</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 6.</p>
                            <h3>Wed</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 7.</p>
                            <h3>Thu</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 8.</p>
                            <h3>Fri</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 9.</p>
                            <h3>Sat</h3>
                        </div>
                        <div className="col-md-1">
                            <p>Jan 10.</p>
                            <h3>Sun</h3>
                        </div>
                        <div className="col-md-2.5">
                            <p></p>
                            <h3>&gt;</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <div id="imgdiv"></div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">Time/Date</p>
                            <h5 class="card-title">Event Title-Garden</h5>
                            <p class="card-text">Number of Guests</p>
                            <p class="card-text">Description</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <div id="imgdiv"></div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">Time/Date</p>
                            <h5 class="card-title">Event Title-Garden</h5>
                            <p class="card-text">Number of Guests</p>
                            <p class="card-text">Description</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <div id="imgdiv"></div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-text">Time/Date</p>
                            <h5 class="card-title">Event Title-Garden</h5>
                            <p class="card-text">Number of Guests</p>
                            <p class="card-text">Description</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlantlibschO;