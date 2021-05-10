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
        <div id="logo">
          <img className="" src={Logo} alt="Logo"/>
        </div>
        <Link className="navbar-brand" to="/">GardenSpace</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>    
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav flex-grow-1 mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/">Garden Locator</Link>
              <Link className="nav-link" aria-current="page" to="/">What are community garden?</Link>
              <Link className="nav-link" aria-current="page" to="/">Plant Library</Link>
              <Link className="nav-link" aria-current="page" to="/">Get Involved</Link>
            </li>
            <ul className="navbar-nav flex-grow-1 mb-2 mb-md-0">
              <li className="nav-item">
                <Link className="nav-link" to="/login">Owner Log in</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/login">Register My Garden</Link>
                </li>
            </ul>
            <div className="flex-grow-1 d-flex justify-content-end">
              {user && (
                <li className="nav-item">
                  <a className="nav-link" href="/logout" onClick={onLogout}>Log out</a>
                </li>)}
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Log in</Link>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
