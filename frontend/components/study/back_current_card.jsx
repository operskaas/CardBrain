import React from 'react';

const BackCurrentCard = ({cardClassName, answerText}) => (
  <div className="back">
    <div className={cardClassName}>
      <div className='side-text'>A.</div>
      <div className='card-text'>
        <p>
          {answerText}
        </p>
      </div>
      <div className='edit-side'>Edit</div>
    </div>
  </div>
);

export default BackCurrentCard;
