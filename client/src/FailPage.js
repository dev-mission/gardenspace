import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import './FailPage.scss';

function FailPage() {
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

    return (
      <main className="container">
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
                        <li class="nav-item">
                            <Link className="nav-link" aria-current="page" to="/wacg">What are community garden?</Link>
                        </li>
                        <li class="nav-item">
                          <Link className="nav-link" aria-current="page" to="/plantlib">Plant Library</Link>
                        </li>
                        <li class="nav-item" style={{backgroundColor: "#2A936D"}}>
                          <Link className="nav-link" aria-current="page" to="/getinvolved" style={{color: "white"}}>Get Involved</Link>
                        </li>
                      </ul>
                    </div>
                </div>
                <input type="button" class="btn btn-outline-dark" value="Owner Log In" onClick={login}/>
                <div id="space" style={{margin:"8px"}}></div>
                <input class="btn btn-success" type="button" value="Register My Garden" onClick={register}/>         
            </div>
          </nav>
        &lt; <u><h8>  Back to Get Involved</h8></u>
        <h1>Sorry, booking unsuccessful!</h1>

       <h3>Please try again later or sign up for a different event.</h3>

       <div class="first-button">
    <button type="button" class="btn btn-outline-secondary">Go to Home</button>
    </div>
   
      </main>    
    );
  }
  
  export default FailPage;