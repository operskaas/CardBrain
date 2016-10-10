import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session/session_form_container';
import Modal from './modal';
import LibraryContainer from './library/library_container';
import Home from './home';
import CardsEditForm from './library/decks/cards_edit_form';
import Study from './study/study';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser.id) {
      replace('/library');
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
        <Route path='/study' component={Study} onEnter={_redirectUnlessLoggedIn}/>
        <Route path='/' component={App} >
          <IndexRoute component={Home} onEnter={_redirectIfLoggedIn}/>
          <Route path='library' component={LibraryContainer}
            onEnter={_redirectUnlessLoggedIn}/>
          <Router path='edit/:deckId' component={CardsEditForm}
            onEnter={_redirectUnlessLoggedIn}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;

// <IndexRoute component={ ContentContainer } />
