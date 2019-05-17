
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="splash-container">
      <div className="splash">
        <h1 className="splash-header">Yet Another Workout Tracker</h1>
        <h2 className="splash-details">Track your workouts with this lightweight app.</h2>
        <h3 className="splash-details">Customize your exercises and your workout plans.</h3>
        <div className="splash-links">
          <Link to={'/signup'}>Signup</Link>
          <span>or</span>
          <Link to={'/login'}>Login</Link>
        </div>
      </div>
      <footer className="copyright">Copyright &copy; 2019 Jason Fu</footer>
      <div className="bg-image"></div>
    </div>
  )
}

export default MainPage;