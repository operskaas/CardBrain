import React from 'react';

const FrontCurrentCard = ({cardClassName, questionText}) => (
  <div className="front">
    <div className={cardClassName}>
      <div className='side-text'>Q.</div>
      <div className='card-text'>
        <p>
          {questionText}
        </p>
      </div>
      <div className='edit-side'>Edit</div>
    </div>
  </div>
);

export default FrontCurrentCard;
