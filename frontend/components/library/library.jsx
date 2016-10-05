import React from 'react';
import SubjectList from './subject_list';

const Library = () => {
  return (
    <aside className='subject-follows-aside'>
      <header className='subject-follows-header group'>
        <h4>Subjects</h4>
        <button className='create-subject-follows-btn'>
          <strong>
            <i className="fa fa-plus" aria-hidden="true"></i>
          </strong>
          Create
        </button>
      </header>
      <SubjectList className='subject-follows-list'/>
    </aside>
  );
}

export default Library;
