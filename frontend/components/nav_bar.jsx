import React from 'react';
import { Link } from 'react-router';

const NavBar = ({ currentUser, logout }) => {
  let result;
  if (currentUser.id === null) {
    result = (
      <div>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
      </div>
    );
  } else {
    result = (
      <div>
        <p>Welcome {currentUser.username}</p>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }
  return result;
};

export default NavBar;
