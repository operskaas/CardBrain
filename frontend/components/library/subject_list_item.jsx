import React from 'react';

const SubjectListItem = ({ subject }) => {
  return (
    <li>
      <strong className='subject-item-title'>
        {subject.title}
      </strong>
    </li>
  );
};

export default SubjectListItem;
