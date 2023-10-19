import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ className = '', variant = 'primary', children, onClick, disabled, size = 'md' }) => {
  function handleClick(e) {
    onClick(e);
  }

  return (
    <button
      className={classNames('btn', className, {
        [`btn--${variant}`]: variant,
        [`btn--${size}`]: size,
      })}
      type="button"
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
