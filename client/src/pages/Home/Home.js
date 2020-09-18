import React from 'react';

import './Home.scss';
import Hero from 'components/sections/Hero';
import About from 'components/sections/About';
import Skill from 'components/sections/Skill';
import Project from 'components/sections/Project';
import Contact from 'components/sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
