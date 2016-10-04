import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import * as Actions from './actions/session_actions';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    if (window.currentUser) {
      const preloadedState = {
        session: {
          currentUser: window.currentUser,
          errors: []
        }
      };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    window.store = store;
    ReactDOM.render(<h1>Welcome to CardBrain</h1>, root);
});
