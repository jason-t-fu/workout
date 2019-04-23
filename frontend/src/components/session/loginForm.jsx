import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';

import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [previousUser, setPreviousUser] = useState(undefined);

  // Essentially a componentWillReceiveProps/getDerivedStateFromProps
  useEffect(() => {
    debugger;
    if (props.currentUser !== previousUser) { //Wtf. where is currentUser coming from
      props.history.push('/exercises');
      setPreviousUser(props.currentUser);
      setErrors({ errors: props.errors });
    }
  });

  const handleSubmit = event => {
    event.preventDefault();

    let user = {
      email,
      password
    };
    props.login(user);
  };

  const renderErrors = () => {
    debugger;
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
          <input type="text"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)} 
            placeholder="Email"
          />
          <br />
          <input type="password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            placeholder="Password"
          />
          <br />
          <input type="submit" value="Submit" />
          {renderErrors()}
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
  debugger;
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