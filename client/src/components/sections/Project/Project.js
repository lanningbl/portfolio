import React from 'react';
import { FaGithub } from 'react-icons/fa';

import './Project.scss';
import useOnScreen from 'hooks/useOnScreen';

function Project() {
  const [setRef, visible] = useOnScreen({ rootMargin: '-150px' });

  return (
    <div className='project' id='project'>
      <div
        className={`project__title ${
          visible ? 'fade-in-right' : 'fade-out-right'
        }`}
      >
        My Projects
      </div>
      <div
        className={`projects ${visible ? 'fade-in-left' : 'fade-out-left'}`}
        ref={setRef}
      >
        <div className='project-card'>
          <a
            href='https://brady-mern-calendar.herokuapp.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              className='project-img'
              src={require('assets/img/calendar-app.png')}
              alt='calendar app'
            />
          </a>
          <div className='img-label'>
            Calendar
            <a
              href='https://github.com/lanningbl/calendar'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithub className='github-icon' />
            </a>
          </div>
        </div>
        {/* <div className='project-card'>2</div>
        <div className='project-card'>3</div>
        <div className='project-card'>4</div> */}
      </div>
    </div>
  );
}

export default Project;
