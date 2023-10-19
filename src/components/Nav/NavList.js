import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const NavList = ({ links, className = '' }) => {
  return (
    <ul aria-label="Navigation" className={classNames('nav-list', className)}>
      {links.map((item) => (
        <li className="nav-list__item" key={item.id}>
          {item.icon ? (
            <a
              className={classNames(
                'nav-list__link nav-list__link--icon',
                `nav-list__link--icon-${item.icon}`
              )}
              href={item.href}
            >
              <span className="visually-hidden">{item.icon}</span>
            </a>
          ) : (
            <a className="nav-list__link" href={item.href}>
              {item.label}
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
