import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import { Switch } from 'react-router-dom';
import MainPage from './mainPage';
import NavBar from './nav/navBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        {/* <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
      </Switch>
    </div>
  )
}

export default App;