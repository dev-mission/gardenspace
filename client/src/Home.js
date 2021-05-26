import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import Gardenimg from "./gardenimg.jpg";
import './Header.scss';
import './Home.scss';

function Home() {

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
                  <li class="nav-item" id="nav-item1">
                    <Link className="nav-link" aria-current="page" to="/">Garden Locator</Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" aria-current="page" to="/wacg">What are community garden?</Link>
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
            {/*<input type="button" onclick="location.href='https://google.com';" value="Go to Google" />*/}
            <div id="space"></div>
            <input class="btn btn-success" type="button" value="Register My Garden" onClick={register}/>
        </div>
      </nav>
      <div className="container">
        <div className="col-md-6">
          <img src={Gardenimg} class="img-thumbnail" alt="Garden Image"/>
        </div>

        <div className="col-md-6">
          {/*<div className="">
          <input className="" placeholder="Find a community garden near you" type="input"/>
          <input type="submit"/>
          </div>*/}
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Find a community garden near you" />
            <button class="btn btn btn-success" type="button" id="button-addon2">Submit</button>
          </div>
          <div>
            <div className="container">
              <div className="col-md-4 mapBox">

              </div>
              <div className="col-md-8 gardenInfo">
                  <h1>Garden</h1>
                  <p>Address</p>
                  <p>Type of Garden</p>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="col-md-4 mapBox">

              </div>
              <div className="col-md-8 gardenInfo">
                  <h1>Garden</h1>
                  <p>Address</p>
                  <p>Type of Garden</p>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="col-md-4 mapBox">

              </div>
              <div className="col-md-8 gardenInfo">
                  <h1>Garden</h1>
                  <p>Address</p>
                  <p>Type of Garden</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>  
  );
}

export default Home;
