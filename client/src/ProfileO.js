import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import './Header.scss';

function ProfileO(){
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
                  <li class="nav-item" style={{backgroundColor: "#2A936D"}}>
                    <Link className="nav-link" aria-current="page" to="/ProfileO" style={{color: "white"}}>Garden Profile</Link>
                  </li>
                  <li class="nav-item">
                  <Link className="nav-link" aria-current="page" to="/PlantlibO">Plant Library</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" aria-current="page" to="/PlantlibschO">Schedule</Link>
                  </li>
                </ul>
              </div>
            </div>
            <input type="button" class="btn btn-outline-dark" value="Log Out" onClick="/login"/>
            </div>
            </nav>

            <div className="col-md-5">
              <h1>Garden Profile</h1>
            </div>
            <div className="col-md-7">
              <p>Garden Name</p>
              <p>Address</p>
              <p>Description</p>
              <p>Hours</p>
              <p>Phone</p>
              <p>Email</p>
            </div>
        </div>
    )
}

export default ProfileO