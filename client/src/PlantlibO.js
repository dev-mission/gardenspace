import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import './Header.scss';
import './PlantlibO.scss';

function PlantlibO(){

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
                  <li class="nav-item" style={{backgroundColor: "#2A936D"}}>
                  <Link className="nav-link" aria-current="page" to="/PlantlibO" style={{color: "white"}}>Plant Library</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" aria-current="page" to="/PlantlibschO">Schedule</Link>
                  </li>
                </ul>
              </div>
            </div>
            <input type="button" class="btn btn-outline-dark" value="Log Out" onClick={onLogout}/>
            </div>
        </nav>
            <div class="container" id="calendar">
                <div className="col-md-12">
                    <h1 id="schedule-title">Plant Library</h1>
                    <div className="" id="addPlant">
                        <button class="btn btn btn-success" type="button" id="button-addon2">Add new plants</button>
                    </div>
                    <div className="col-md-6 gardenInput">
                        <input type="text" class="form-control" placeholder="Search for plants"/>
                        <button class="btn btn btn-success" type="button">Search</button>
                    </div>
                    <div className="col-md-3">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Garden</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                    </div>
                    <div class="container">
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <div id="imgdiv"></div>
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                            <div class="card-body">
                                <div>Location</div>

                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <div id="imgdiv"></div>
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <div id="imgdiv"></div>
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="container">
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <div id="imgdiv"></div>
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <div id="imgdiv"></div>
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <div id="imgdiv"></div>
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PlantlibO;