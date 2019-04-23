
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import setCurrentUser from './util/setCurrentUser';

import './stylesheets/application.scss'

document.addEventListener('DOMContentLoaded', () => {
  const store = setCurrentUser();
  const root = document.getElementById('root');
  
  window.getState = store.getState;

  ReactDOM.render(<Root store={store} />, root);
});