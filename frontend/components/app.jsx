import React from 'react';
import NavBarContainer from './nav_bar_container';

const App = ({ children }) => (
  <div>
    <NavBarContainer />
    {children}
  </div>
);

export default App;
