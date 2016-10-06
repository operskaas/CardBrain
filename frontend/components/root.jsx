import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import Modal from './modal';
import LibraryContainer from './library/library_container';
import Home from './home';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser.id) {
      replace('/');
    }
  };
  const _redirectUnlessLoggedIn = (nextState, replace) => {
    if (!(store.getState().session.currentUser.id)) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path='/' component={App} >
          <IndexRoute component={Home} />
          <Route path='modal' component={Modal} >
            <Route path='login' component={SessionFormContainer}
              onEnter={_redirectIfLoggedIn}/>
            <Route path='signup' component={SessionFormContainer}
              onEnter={_redirectIfLoggedIn}/>
          </Route>
          <Route path='library' component={LibraryContainer}
            onEnter={_redirectUnlessLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

// <IndexRoute component={ ContentContainer } />
