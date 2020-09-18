import React from 'react';

import './About.scss';
import useOnScreen from 'hooks/useOnScreen';

function About() {
  const [setRef, visible] = useOnScreen({ rootMargin: '-150px' });

  return (
    <div className='about' id='about'>
      <div
        className={`about__title ${
          visible ? 'fade-in-right' : 'fade-out-right'
        }`}
      >
        About
      </div>
      <div
        className={`about-section ${
          visible ? 'fade-in-left' : 'fade-out-left'
        }`}
        ref={setRef}
      >
        <div className='about__image' />
        <div className='about__bio'>
          <div className='bio-grabber'>
            Outcome-oriented full stack developer with a passion for learning
            and innovation. Fast. Responsive. Dynamic.
          </div>
          I love to seek out challenges that will help me grow. I spend my free
          time creating projects that enable me to learn new skills or master
          the ones I regularly use to become more efficient and effective. I
          also enjoy to swim and play with my puppy.
        </div>
      </div>
    </div>
  );
}

export default About;
