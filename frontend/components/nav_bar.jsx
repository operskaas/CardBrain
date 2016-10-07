import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import modalStyles from '../constants/modalStyles';
import SessionFormContainer from './session/session_form_container';

class NavBar extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
    this.loginClick = this.loginClick.bind(this);
    this.signupClick = this.signupClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleBrandClick () {
    hashHistory.push('/');
  }

  logoutAndRedirect  () {
    this.props.logout(() => hashHistory.push('/'));
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  loginClick() {
    this.setState({
      sessionFormType: 'login',
      modalOpen: true
    })
  }

  signupClick() {
    this.setState({
      sessionFormType: 'signup',
      modalOpen: true
    })
  }

  render () {
    let authNav;
    if (this.props.currentUser.id === null) {
      authNav = (
        <div className='logged-out-nav'>
          <button className='header-link' onClick={this.loginClick}>Log In</button>
          <button className='blue-button' onClick={this.signupClick}>Sign Up</button>
        </div>
      );
    } else {
      authNav = (
        <div className='logged-in-nav'>
          <p>{this.props.currentUser.username}</p>
          <button className='blue-button' onClick={this.logoutAndRedirect}>Log Out</button>
        </div>
      );
    }
    return (
      <nav className="nav group">
        <div onClick={this.handleBrandClick} className='brand'>
          <img className='logo' src={window.cardBrainAssets.logoImage} />
          <h2>CARD<span>BRAIN</span></h2>
        </div>
        <ul>
          <li>
            <a className='header-link' href='#/library'>Library</a>
          </li>
          <li>
            <a className='header-link' href='#/search'>Search</a>
          </li>
        </ul>
        <div className='auth-nav'>
          {authNav}
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={modalStyles}
        >
          <button onClick={this.closeModal} className='modal-close-btn'>X</button>
          <SessionFormContainer closeModal={this.closeModal} formType={this.state.sessionFormType}/>
        </Modal>
      </nav>
    );
  }
};

export default NavBar;
