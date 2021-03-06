import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import {AuthContextProvider} from './AuthContext';
import Header from './Header';
import Home from './Home';
import WhatAreCommunityGarden from './Whatarecommgar';
import Plantlib from './Plantlib';
import Getinvolved from './Getinvolved';
import SignUp from './SignUp';
import FailPage from './FailPage';
import SuccessPage from './SuccessPage'
import RegisterO from './RegisterO';
import LoginO from './LoginO';
import ProfileEditO from './ProfileEditO'
import ProfileO from './ProfileO'
import PlantlibO from './PlantlibO'
import PlantlibschO from './PlantlibschO'
import Login from './Login';
import Passwords from './Passwords';
import Register from './Register';
import Plants from './Plants/Plants';
import GardenPlants from './GardenPlants/GardenPlants';
import Gardens from './Gardens/Gardens';
import Attendees from './Attendees/Attendees';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        {/*<Header />*/}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wacg">
            <WhatAreCommunityGarden />
          </Route>
          <Route path="/getinvolved">
            <Getinvolved />
          </Route>
          <Route path="/plantlib">
            <Plantlib/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/failpage">
            <FailPage />
          </Route>
          <Route path="/successpage">
            <SuccessPage />
          </Route>
          <Route path="/passwords">
            <Passwords />
          </Route>
          <Route path="/registero">
            <RegisterO />
          </Route>
          <Route path="/logino">
            <LoginO/>
          </Route>
          <Route path="/profileedito">
            <ProfileEditO/>
          </Route>
          <Route path="/profileo">
            <ProfileO/>
          </Route>
          <Route path="/plantlibo">
            <PlantlibO/>
          </Route>
          <Route path="/plantlibscho">
            <PlantlibschO/>
          </Route>
          {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && (
            <Route path="/register">
              <Register />
            </Route>
          )}
          <Route path="/plants">
            <Plants />
          </Route>
          <Route path="/gardenplants">
            <GardenPlants />
          </Route>
          <Route path="/gardens">
            <Gardens />
          </Route>
          <Route path="/attendees">
            <Attendees />
          </Route>
            <Route path="/profile">
              {/*<Profile />*/}
            </Route>
            <Route path="/attendee">
              <Attendees />
            </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
