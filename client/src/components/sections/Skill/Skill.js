import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiMongodb,
  SiFirebase,
  SiMysql,
  SiGraphql,
} from 'react-icons/si';
import { FaNode, FaSass } from 'react-icons/fa';

import './Skill.scss';
import useOnScreen from 'hooks/useOnScreen';
import FlipCard from 'components/FlipCard';

const Skill = () => {
  const [setRef, visible] = useOnScreen({ rootMargin: '-150px' });

  return (
    <div className='skill' id='skill'>
      <div
        className={`skill__title ${visible ? 'fade-in-left' : 'fade-out-left'}`}
      >
        Skills
      </div>
      <div
        className={`skill__cards ${
          visible ? 'fade-in-right' : 'fade-out-right'
        }`}
        ref={setRef}
      >
        <FlipCard
          front={<SiHtml5 className='skill__icons' color='#e44d26' />}
          back='HTML'
        />
        <FlipCard
          front={<SiCss3 className='skill__icons' color='#1572B6' />}
          back='CSS3'
        />
        <FlipCard
          front={<SiJavascript className='skill__icons' color='#ffca28' />}
          back='Javascript'
        />
        <FlipCard
          front={<SiReact className='skill__icons' color='#00d8ff' />}
          back='React'
        />
        <FlipCard
          front={<SiRedux className='skill__icons' color='#764abc' />}
          back='Redux'
        />
        <FlipCard
          front={<SiMongodb className='skill__icons' color='#599636' />}
          back='MongoDB'
        />
        <FlipCard
          front={<SiFirebase className='skill__icons' color='#ffc400' />}
          back='Firebase'
        />
        <FlipCard
          front={<SiMysql className='skill__icons' color='#0a4e79' />}
          back='MySQL'
        />
        <FlipCard
          front={<FaNode className='skill__icons' color='#78b45f' />}
          back='Node'
        />
        <FlipCard
          front={<SiGraphql className='skill__icons' color='#e535ab' />}
          back='GraphQL'
        />
        <FlipCard front={'Restful'} back='Restful' />
        <FlipCard
          front={<FaSass className='skill__icons' color='#c14e88' />}
          back='Sass'
        />
      </div>
    </div>
  );
};

export default Skill;
