import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import './Footer.scss';

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer__icons'>
        <a
          href='https://github.com/lanningbl'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='footer__icon' />
        </a>
        <a
          href='https://www.linkedin.com/in/brady-lanning-b67320129/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedinIn className='footer__icon' />
        </a>
      </div>

      <div className='footer__copyright-section'>
        <span className='footer__name'>Brady Lanning</span>
        <span className='footer__copyright'>
          {' '}
          &copy; {new Date().getFullYear()}
        </span>
      </div>
    </div>
  );
}

export default Footer;
