import React from 'react';

import './Home.scss';
import HomeSection from '../../components/HomeSection';
import AboutSection from '../../components/AboutSection';
import SkillSection from '../../components/SkillSection';
import ProjectSection from '../../components/ProjectSection';
import ContactSection from '../../components/ContactSection';
import FooterSection from '../../components/FooterSection';

const Home = () => {
  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <FooterSection />
    </>
  );
};

export default Home;
