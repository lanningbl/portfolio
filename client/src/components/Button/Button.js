import React from 'react';
import { Link } from 'react-router-dom';

import './Button.scss';

const Button = ({ children, type, onClick, variant, size }) => {
  return (
    <Link className='btn-mobile'>
      <button className={`btn--${variant} btn--${size}`}>{children}</button>
    </Link>
  );
};

export default Button;
