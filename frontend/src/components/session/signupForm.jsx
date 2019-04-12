import { connect } from 'react-redux';
import { signup } from '../../actions/sessionActions';

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const SignupForm = props => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [alreadySignedIn, setAlreadySignedIn] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (props.signedIn === true && props.signedIn !== alreadySignedIn) {
      props.history.push('/login');
      setAlreadySignedIn(true);
      setErrors({ errors: props.errors });
    }
  });

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

  const renderErrors = () => {
    return (
      <ul>
        {Object.keys(errors).map((error, i) => {
          return (
            <li key={`error-${i}`}>
              {errors[error]}
            </li>
          )
        })}
      </ul>
    );
  }

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit}>
        <div className="login-form">
          <br />
          <input type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            placeholder="Email"
          />
          <br />
          <input type="text"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            placeholder="Username"
          />
          <br />
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
          />
          <br />
          <input type="password"
            value={password2}
            onChange={(e) => setPassword2(e.currentTarget.value)}
            placeholder="Confirm Password"
          />
          <br />
          <input type="submit" value="Submit" />
          {renderErrors()}
        </div>
      </form>
    </div>
  );
};


const mapStateToProps = state => {
  return {
    signedIn: state.session.isSignedIn,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignupForm));