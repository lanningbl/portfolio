import React from 'react';

import './HomeSection.scss';
import { Title, Subtitle } from './HomeSVG';

const HomeSection = () => {
  return (
    <div className='home-section' id='home'>
      <Title />
      <Subtitle />
      <a className='home-section__btn' href='#about'>
        View my work <div className='arrow' />
      </a>
    </div>
  );
};

export default HomeSection;
