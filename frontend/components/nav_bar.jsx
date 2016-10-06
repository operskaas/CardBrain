import React from 'react';
import { Link, hashHistory } from 'react-router';

class NavBar extends React.Component {

  constructor (props) {
    super(props);
    this.logoutAndRedirect = this.logoutAndRedirect.bind(this);
  }

  handleBrandClick () {
    console.log('brand clicked');
  }

  logoutAndRedirect  () {
    this.props.logout(() => hashHistory.push('/'));
  }

  render () {
    let authNav;
    if (this.props.currentUser.id === null) {
      authNav = (
        <div className='logged-out-nav'>
          <a className='header-link' href='#/modal/login'>Log In</a>
          <a className='blue-button' href='#/modal/signup'>Sign Up</a>
        </div>
      );
    } else {
      authNav = (
        <div className='logged-in-nav'>
          <p>Welcome {this.props.currentUser.username}</p>
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
      </nav>
    );
  }
};

export default NavBar;
