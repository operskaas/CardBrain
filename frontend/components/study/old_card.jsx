import React from 'react';

const OldCard = ({cardClassName, answerText, oldCardStyle}) => (
  <div className='old-card' style={oldCardStyle}>
    <div className="flipper">
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
    </div>
  </div>
);

export default OldCard;
