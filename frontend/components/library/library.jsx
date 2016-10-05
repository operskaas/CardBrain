import React from 'react';

const Library = () => {
  return (
    <aside className='subject-follows-aside'>
      <header className='subject-follows-header group'>
        <h4>Subjects</h4>
        <button className='create-subject-follows-btn'>
          <strong>
            +
          </strong>
          Create
        </button>
      </header>
      <ul className='subject-follows-list'>
        <p>I'm a library</p>
      </ul>
    </aside>
  );
}

export default Library;
