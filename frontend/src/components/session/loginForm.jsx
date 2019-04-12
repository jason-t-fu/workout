import { connect } from 'react-redux';
import { login } from '../../actions/sessionActions';

import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const LoginForm = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [previousUser, setPreviousUser] = useState(false);

  // Essentially a componentWillReceiveProps/getDerivedStateFromProps
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