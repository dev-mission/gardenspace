import {useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';

import Api from './Api';
import {useAuthContext} from './AuthContext';
import Logo from "./Logo.jpg";
import Gardenimg from "./gardenimg.jpg";
import Geneva from './Geneva.jpg';
import Alemany from './Alemany.jpg';
import Portrero from './Portrero.jpg';
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
      <div className="container">
        <div className="col-md-6">
          <img src={Gardenimg} class="img-thumbnail" alt="Garden Image"/>
        </div>

        <div className="col-md-6">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Find a community garden near you" />
            <button class="btn btn btn-success" type="button" id="button-addon2">Submit</button>
          </div>
          <div>
            <div className="container">
              <div className="col-md-4 mapBox">
                <img src={Geneva} alt="Geneva Community Garden"/>
              </div>
              <div className="col-md-8 gardenInfo">
                  <h1>Geneva Community Garden</h1>
                  <p>Geneva Avenue and Delano Avenue,San Francisco, CA 94112</p>
                  <p>The Geneva Community Garden is a project by residents in District 11 of San Francisco to create a community garden in a vacant lot located at Geneva Avenue ...</p>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="col-md-4 mapBox">
                <img src={Alemany} alt="Alemany Community Garden"/>
              </div>
              <div className="col-md-8 gardenInfo">
                  <h1>Alemany Farm</h1>
                  <p>700 Alemany Blvd, San Francisco, CA 94110</p>
                  <p>The largest urban farm in San Francisco, Alemany Farm offers everyone the chance to learn where their food comes from, pitch in to help, and take home fresh produce for free! Learn more...</p>
              </div>
            </div>
          </div>
          <div>
            <div className="container">
              <div className="col-md-4 mapBox">
                <img src={Portrero} alt="Portrero Community Garden"/>
              </div>
              <div className="col-md-8 gardenInfo">
                  <h1>Potrero Hill Community Garden</h1>
                  <p>780 San Bruno Ave, San Francisco, CA 94107</p>
                  <p>The garden boasts of panoramic views of the Mission, Twin Peaks, and on a clear day even the Golden Gate Bridge. Its sunny, Mediterranean climate permits cultivation of fruits...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>  
  );
}

export default Home;