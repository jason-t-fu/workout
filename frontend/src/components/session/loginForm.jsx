import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';

import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const LoginForm = React.memo(function LoginForm(props) {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [errors, setErrors] = useState({});
  let [previousUser, setPreviousUser] = useState(false);

  if (props.currentUser !== previousUser) {
    props.history.push('/tweets');
    setPreviousUser(props.currentUser);
    setErrors({ errors: props.errors });
  }

  const handleSubmit = event => {
    event.preventDefault();

    let user = {
      email,
      password
    };
    props.login(user);
  };

  const renderErrors = () => {
    return (
      <ul>
        {Object.keys(errors).map((error, i) => {
          <li key={`error-${i}`}>
            {errors[error]}
          </li>
        })}
      </ul>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
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
        </div>
      </form>
    </div>
  );
});

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