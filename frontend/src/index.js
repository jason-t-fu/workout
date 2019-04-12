
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import setCurrentUser from './util/setCurrentUser';

document.addEventListener('DOMContentLoaded', () => {
  const store = setCurrentUser();
  const root = document.getElementById('root');
  
  ReactDOM.render(<Root store={store} />, root);
});