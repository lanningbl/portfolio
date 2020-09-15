import React from 'react';

import './FlipCard.scss';

const FlipCard = ({ front, back }) => {
  return (
    <div className='flip-card'>
      <div className='flip-card__inner'>
        <div className='flip-card__front'>{front}</div>
        <div className='flip-card__back'>{back}</div>
      </div>
    </div>
  );
};

export default FlipCard;
