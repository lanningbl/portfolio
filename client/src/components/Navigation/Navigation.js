import React, { useState, useEffect } from 'react';

import './Navigation.scss';

const Navigation = () => {
  // const [isMobileButtonVisible, setIsMobileButtonVisible] = useState(false);

  useEffect(() => {
    // handleResize();
  }, []);

  // const handleResize = () => {
  //   if (window.innerWidth <= 960) {
  //     setIsMobileButtonVisible(true);
  //   } else {
  //     setIsMobileButtonVisible(false);
  //   }
  // };

  // window.addEventListener('resize', handleResize);

  const [isOpen, setIsOpen] = useState(false);
  const [close, setClose] = useState('');
  const [show, setShow] = useState('');

  function toggleMenu() {
    if (!isOpen) {
      setClose('close');
      setShow('show');
      setIsOpen(true);
    } else {
      setClose('');
      setShow('');
      setIsOpen(false);
    }
  }

  return (
    <header>
      <div className={`menu-btn ${close}`} onClick={toggleMenu}>
        <div className='btn-line' />
      </div>

      <nav className={`menu ${show}`}>
        <div className={`menu-branding ${show}`}>
          <div className={`menu-portrait ${show}`}></div>
        </div>
        <ul className={`menu-nav ${show}`}>
          <li className={`nav-item ${show}`}>
            <a href='#home' className={`nav-link ${show}`} onClick={toggleMenu}>
              Home
              {/* <i class='fas fa-home'></i> */}
            </a>
          </li>
          <li className={`nav-item ${show}`}>
            <a
              href='#about'
              className={`nav-link ${show}`}
              onClick={toggleMenu}
            >
              About
              {/* <i class='fas fa-user'></i> */}
            </a>
          </li>
          <li className={`nav-item ${show}`}>
            <a
              href='#skill'
              className={`nav-link ${show}`}
              onClick={toggleMenu}
            >
              Skills
              {/* <i class='fas fa-brain'></i> */}
            </a>
          </li>
          <li className={`nav-item ${show}`}>
            <a
              href='#project'
              className={`nav-link ${show}`}
              onClick={toggleMenu}
            >
              Projects
              {/* {isHovered ? <i class='fas fa-project-diagram' /> : 'Projects'} */}
            </a>
          </li>
          <li className={`nav-item ${show}`}>
            <a
              href='#contact'
              className={`nav-link ${show}`}
              onClick={toggleMenu}
              // data-hover={'CONTACT'}
            >
              Contact
              {/* <i class='fas fa-envelope' /> */}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
