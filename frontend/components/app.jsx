import React from 'react';
import NavBarContainer from './nav_bar_container';

const App = ({ children }) => (
  <div>
    <NavBarContainer />
    <main className='content'>
      {children}
    </main>
  </div>
);

export default App;
