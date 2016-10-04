import React from 'react';
import { Link } from 'react-router';

const NavBar = ({ currentUser, logout }) => {
  let authNav;
  if (currentUser.id === null) {
    authNav = (
      <div className='logged-out-nav'>
        <a className='blue-button' href='#/modal/signup'>Sign Up</a>
        <a href='#/modal/login'>Log In</a>
      </div>
    );
  } else {
    authNav = (
      <div className='logged-in-nav'>
        <p>Welcome {currentUser.username}</p>
        <button className='blue-button' onClick={logout}>Log Out</button>
      </div>
    );
  }
  return (
    <nav className="group">
      <img className='logo' src='/assets/logo-4b6e4c2ba696367bd588d1221f55f70b7b31e50df4b97e3c1a734c54e63f52c4.png' />
      <h2>CARD<span>BRAIN</span></h2>
      <ul>
        <li>
          <a href='#/library'>Library</a>
        </li>
        <li>
          <a href='#/search'>Search</a>
        </li>
      </ul>
      <div className='auth-nav'>
        {authNav}
      </div>
    </nav>
  );
};

export default NavBar;
