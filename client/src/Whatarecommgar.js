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