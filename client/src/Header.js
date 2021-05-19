import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import './Header.scss';

function Header() {
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

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        {/*<Link className="navbar-brand" to="/">My App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
  </button>*/}
        {/*<Link className="navbar-brand" id="title" to="/">Garden Space</Link>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav flex-grow-1 mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <div className="flex-grow-1 d-flex justify-content-end">
              {user && (
                <li className="nav-item">
                  <a className="nav-link" href="/logout" onClick={onLogout}>Log out</a>
                </li>)}
              {!user && (
                <li className="nav-item">
              </li><Link className="nav-link" to="/login">Log in</Link>*/}
        <a class="navbar-brand" href="Home.js">
          <img src={Logo} alt="Logo" width="50.53" height="50.53" class="d-inline-block align-text-top" />
        </a>
        <Link className="navbar-brand" to="Home.js" id="HeaderTitle">GardenSpace</Link>
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
                  <Link className="nav-link" aria-current="page" to="/">Plant Library</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link" aria-current="page" to="/getinvolved">Get Involved</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <input type="button" class="btn btn-outline-dark" value="Owner Log In"/>
          <div id="space"></div>
          <input class="btn btn-success" type="button" value="Register My Garden"/>
          
      </div>
    </nav>
  );
}

export default Header;
