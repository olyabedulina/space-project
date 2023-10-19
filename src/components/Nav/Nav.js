import React, { useState, useEffect, useRef } from 'react';
import NavList from './NavList';
import { useResize } from '../../helpers/resize';
import { getUniqueId } from '../../helpers/uniqueId';
import './styles.scss';

const Nav = ({ links, className = '' }) => {
  const { isMobile } = useResize();
  const [uid] = useState(getUniqueId());
  const checkboxRef = useRef(null);

  const handleChange = (event) => {
    if (event.target.checked) {
      document.body.classList.add('lock-scroll');
    } else {
      document.body.classList.remove('lock-scroll');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile) {
        document.body.classList.remove('lock-scroll');

        const checkbox = checkboxRef.current;
        if (checkbox) checkbox.checked = false;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="nav">
      {isMobile ? (
        <div className="hamburger-menu">
          <input
            ref={checkboxRef}
            onChange={handleChange}
            className="hamburger-menu__input visually-hidden"
            id={`hamburger-menu__toggle-${uid}`}
            type="checkbox"
          />
          <label className="hamburger-menu__btn" htmlFor={`hamburger-menu__toggle-${uid}`}>
            <span />
          </label>
          <NavList className={className} links={links} />
        </div>
      ) : (
        <NavList className={className} links={links} />
      )}
    </nav>
  );
};

export default Nav;
