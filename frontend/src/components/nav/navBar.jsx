import { connect } from 'react-redux';
import { logout } from '../../actions/sessionActions';

import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = props => {

  const logoutUser = event => {
    event.preventDefault();
    props.logout();
  };

  const getLinks = () => {
    if (props.loggedIn) {
      return (
        <div className="navbar-links">
          <Link to={'/exercises'}>All Exercises</Link>
          <Link to={'/profile'}>Profile</Link>
          <Link to={'/new_exercise'}>Create a new exercise</Link>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )
    }
    else {
      return (
        <div className="navbar-links">
          <Link to={'/signup'}>Signup</Link>
          <Link to={'/login'}>Login</Link>
        </div>
      )
    }
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">YAWT</h1>
      {getLinks()}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: !!state.session.user
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);