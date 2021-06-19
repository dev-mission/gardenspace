import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import picofgarden from './picofgarden.jpg';
import './Whatarecommgar.scss';
import './Header.scss';

function WhatAreCommunityGarden() {

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
        <div className="container">
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
                        <Link className="nav-link" aria-current="page" to="/">Garden Locator</Link>
                    </li>
                    <li class="nav-item" style={{backgroundColor: "#2A936D"}}>
                        <Link className="nav-link" aria-current="page" to="/wacg" style={{color: "white"}}>What are community garden?</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" aria-current="page" to="/plantlib">Plant Library</Link>
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
            </nav>
            <div className="col-md-6">
                <img src={picofgarden} class="img-thumbnail" alt="Garden Image"/>
            </div>
            <div className="col-md-6 gardendesc">
                <h1>What Are Community Gardens?</h1>
                <p>
                    Community Gardens are plots of land owned by the city and maintained by the community and can be used is variety of ways: Growing Food, Learning about agriculture, and having fun and meeting new people. 
                </p>
                <p>
                    Our image is to make it easier for users to learn and connect with all community garden organizers in the bay area.
                    As Community Gardens become more and more of a well known hobby, there needs to be a easier way to connect users with community gardens.
                    GardenSpace is a platform that demonstrates and provide information for each community garden in the bay area and allow a way to connect with them.
                </p>
            </div>
        </div>
    )
}

export default WhatAreCommunityGarden;