import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil';
import { Switch } from 'react-router-dom';
import MainPage from './mainPage';
import NavBar from './nav/navBar';
import LoginForm from './session/loginForm';
import SignupForm from './session/signupForm';

const App = () => {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/" component={MainPage} />
        <AuthRoute exact path="/login" component={LoginForm} />
        <AuthRoute exact path="/signup" component={SignupForm} />
        
        {/* <ProtectedRoute exact path="/exercises" component={Exercises} /> */}
        {/* <ProtectedRoute exact path="/profile" component={Profile} />
        <ProtectedRoute exact path="/new_exercise" component={ExerciseCreate} /> */}
      </Switch>
    </div>
  )
}

export default App;