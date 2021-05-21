import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import './Header.scss';

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
                <a class="navbar-brand" href="Home.js">
                    <img src={Logo} alt="Logo" width="50.53" height="50.53" class="d-inline-block align-text-top" />
                </a>
            <Link className="navbar-brand" to="Home.js" id="HeaderTitle">GardenSpace</Link>
            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <Link className="nav-link" aria-current="page" to="/profilo">Garden Profile</Link>
                  </li>
                  <li class="nav-item" style={{backgroundColor: "#2A936D"}}>
                  <Link className="nav-link" aria-current="page" to="/" style={{color: "white"}}>Plant Library</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Plant Library</Link>
                  </li>
                </ul>
              </div>
            </div>
            <input type="button" class="btn btn-outline-dark" value="Log Out" onClick="/login"/>
            </div>
            </nav>
            <div class="container" id="calendar">
                <div className="col-md-12">
                    <h1 id="schedule-title">Plant Library</h1>
                    <button class="btn btn btn-success" type="button" id="button-addon2">Add new plants</button>
                    <input type="text" class="form-control" placeholder="Search for plants"/>
                    <button class="btn btn btn-success" type="button" id="button-addon2">Search</button>
                    
                    <div class="container">
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="container">
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img src="..." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h1>Card-Title</h1>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img src="..." class="card-img-top" alt="..." />
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