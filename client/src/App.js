import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import {AuthContextProvider} from './AuthContext';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Passwords from './Passwords';
import Register from './Register';
import Plants from './Plants/Plants';
import GardenPlants from './GardenPlants/GardenPlants';
import Gardens from './Gardens/Gardens';
import Attendees from './Attendees/Attendees';
import SignUp from './SignUp';
import SuccessPage from './SuccessPage';
import FailPage from './FailPage';
function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/passwords">
            <Passwords />
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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/successpage">
            <SuccessPage />
          </Route>
          <Route path="/failpage">
            <FailPage />
          </Route>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
