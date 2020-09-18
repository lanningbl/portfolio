import React from 'react';

import './Hero.scss';
import { Title, Subtitle } from './HeroSVG';

const Hero = () => {
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

export default Hero;
