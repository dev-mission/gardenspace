import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import Sunflower from "./Sunflower.jpg";
import Bamboo from "./Bamboo.jpg";
import Agave from "./Agave.jpg";
import Corriander from "./Corriander.jpg";
import Cactus from "./Cactus.jpg";
import Snapdragon from "./Snapdragon.jpg";
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Plantlib(){

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

    const login = (event) => {
        event.preventDefault();
        history.push('/logino')
    }

    const register = (event) => {
        event.preventDefault();
        history.push('/registero')
    }

    return(
        <div class="container body-container">
            {/*<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
            <div className="container">
                <a class="navbar-brand" href="/">
                    <img src={Logo} alt="Logo" width="50.53" height="50.53" class="d-inline-block align-text-top" />
                </a>
                <Link className="navbar-brand" to="/" id="HeaderTitle">GardenSpace</Link>
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        <li class="nav-item">
                          <Link className="nav-link" aria-current="page" to="/">Garden Locator</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" aria-current="page" to="/wacg">What are community garden?</Link>
                        </li>
                        <li class="nav-item" style={{backgroundColor: "#2A936D"}}>
                          <Link className="nav-link" aria-current="page" to="/plantlib" style={{color: "white"}}>Plant Library</Link>
                        </li>
                        <li class="nav-item">
                          <Link className="nav-link" aria-current="page" to="/getinvolved">Get Involved</Link>
                        </li>
                      </ul>
                    </div>
                </div>
                <input type="button" class="btn btn-outline-dark" value="Owner Log In" onClick={login}/>
                <div id="space"></div>
                <input class="btn btn-success" type="button" value="Register My Garden" onClick={register}/>         
            </div>
    </nav>*/}

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
                            <img id="imgdiv" src={Sunflower} alt="Sunflower" />
                            <div class="card-body">
                                <h1>Sunflowers</h1>
                                <p class="card-text">Sunflowers are known for being “happy” flowers, making them the perfect gift to bring joy to someone's (or your) day.</p>
                            </div>
                            <div class="card-body">
                                <div>Location</div>

                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img id="imgdiv" src={Bamboo} alt="Bamboo"/>
                            <div class="card-body">
                                <h1>Bamboos</h1>
                                <p class="card-text">Most bamboo species are native to warm and moist tropical and to warm temperate climates.</p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img id="imgdiv" src={Agave} alt="Agave"/>
                            <div class="card-body">
                                <h1>Agave</h1>
                                <p class="card-text">Traditionally, agave was believed to have medicinal properties. Its sap was also boiled to produce a sweetener known as miel de agave.</p>
                            </div>
                        </div>
                        
                    </div>
                    <div class="container">
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img id="imgdiv" src={Corriander} alt="Corriander"/>
                            <div class="card-body">
                                <h1>Coriander</h1>
                                <p class="card-text">The leaves are variable in shape, broadly lobed at the base of the plant, and slender and feathery higher on the flowering stems. </p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img id="imgdiv" src={Cactus} alt="Cactus"/>
                            <div class="card-body">
                                <h1>Cactus</h1>
                                <p class="card-text">Cactus are native through most of the length of North and South America, from British Columbia and Alberta southward</p>
                            </div>
                        </div>
                        <div class="card" className="col-md-4" style={{width: "100px;"}}>
                            <img id="imgdiv" src={Snapdragon} alt="Snapdragon"/>
                            <div class="card-body">
                                <h1>Snapdragon</h1>
                                <p class="card-text">Snapdragons are very popular short-lived garden perennials that are usually grown as annuals. They are a mainstay of classic flower gardens, with infinite uses, from mixed border gardens to flower boxes to patio containers.</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Plantlib;