import React from 'react';
import './styles.scss';

const Logo = () => {
  return (
    <a aria-current="page" aria-label="Home" href="/" className="logo">
      <span className="visually-hidden">Space homepage</span>
    </a>
  );
};

export default Logo;
