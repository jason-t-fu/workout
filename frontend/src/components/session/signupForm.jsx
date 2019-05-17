import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';

import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';

const SignupForm = props => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    let user = {
      email,
      username,
      password,
      password2
    };
    props.signup(user);
  };

  const renderErrors = field => {
    return (
      <span className="error">
        {props.errors[field]}
      </span>
    )
  }

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <input type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email"
          />
          {renderErrors("email")}
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            placeholder="Username"
          />
          {renderErrors("username")}
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
          />
          {renderErrors("password")}
          <input type="password"
            value={password2}
            onChange={(e) => setPassword2(e.currentTarget.value)}
            placeholder="Confirm Password"
          />
          {renderErrors("password2")}
          <input type="submit" value="Submit" />
          </div>
          <div className="switch">
            <p>Already have an account?</p>
            <Link to="/login">Log in.</Link>
          </div>
        <div className="bg-image"></div>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupForm));