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
import Search from './search/search';
import Subject from './search/subject';

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
        <Route path='/study/:deckId' component={Study} onEnter={_redirectUnlessLoggedIn}/>
        <Route path='/' component={App} >
          <IndexRoute component={Home} onEnter={_redirectIfLoggedIn}/>
          <Route path='subject/:subjectId' component={Subject}/>
          <Route path='search' component={Search}/>
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
