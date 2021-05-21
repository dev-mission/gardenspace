import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import './Header.scss';

function LoginO(){
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
        <div className="container">
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
                    <Link className="nav-link" aria-current="page" to="/">Garden Locator</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link" aria-current="page" to="/wacg">What are community garden?</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Plant Library</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" aria-current="page" to="/getinvolved">Get Involved</Link>
                  </li>
                </ul>
              </div>
            </div>
            <input type="button" class="btn btn-outline-dark" value="Owner Log In" onClick="/login"/>
            <div id="space"></div>
            <input class="btn btn-success" type="button" value="Register My Garden"/>
            </div>
            </nav>

            <h1>Owner Log in</h1>
            <input type="text" class="form-control" placeholder="Email or Phone Number"/>
            <input type="text" class="form-control" placeholder="Password"/>
            <button class="btn btn btn-success" type="button" id="button-addon2">Log in</button>
            <p>
                Not Registered?
                <Link to="/registero">Register My Garden</Link>
            </p>
        </div>
    )
}

export default LoginO