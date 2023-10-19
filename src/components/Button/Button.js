import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ className = '', variant = 'primary', children, onClick, disabled }) => {
  function handleClick(e) {
    onClick(e);
  }

  return (
    <button
      className={classNames('btn', className, {
        [`btn--${variant}`]: variant,
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
