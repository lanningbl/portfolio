import React from 'react';

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
        <div className='project-card'>Coming soon!</div>
        <div className='project-card'>2</div>
        <div className='project-card'>3</div>
        <div className='project-card'>4</div>
      </div>
    </div>
  );
}

export default Project;
