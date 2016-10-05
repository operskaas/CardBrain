import React from 'react';
import { Link } from 'react-router';

const NavBar = ({ currentUser, logout }) => {
  let authNav;
  if (currentUser.id === null) {
    authNav = (
      <div className='logged-out-nav'>
        <a className='header-link' href='#/modal/login'>Log In</a>
        <a className='blue-button' href='#/modal/signup'>Sign Up</a>
      </div>
    );
  } else {
    debugger
    authNav = (
      <div className='logged-in-nav'>
        <p>Welcome {currentUser.username}</p>
        <button className='blue-button' onClick={logout}>Log Out</button>
      </div>
    );
  }
  return (
    <nav className="nav group">
      <img className='logo' src={window.cardBrainAssets.logoImage} />
      <h2>CARD<span>BRAIN</span></h2>
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
};

export default NavBar;
