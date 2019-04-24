import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';

import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    let user = {
      email,
      password
    };
    props.login(user);
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
          <br />
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
          />
          {renderErrors("email")}
          <br />
          <input type="submit" value="Submit" />
          <div>
            <p>Don't have an account?</p>
            <Link to="/signup">Sign up.</Link>
          </div>
        </div>
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
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginForm));