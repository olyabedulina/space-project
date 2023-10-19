import React, { createElement } from 'react';
import Button from '../Button';
import classNames from 'classnames';
import './styles.scss';

const Card = ({
  headingTag = 'h3',
  headingText,
  className = '',
  buttonVariant = 'primary',
  handleButtonClick,
  buttonText,
  paragraphText,
  props,
}) => {
  const Tag = ({ as, children, ...props }) => createElement(as, props, children);

  return (
    <div className={classNames('card', className)} {...props}>
      <Tag as={headingTag} className="card__heading" dangerouslySetInnerHTML={{ __html: headingText }} />
      {paragraphText && <p className="card__copy" dangerouslySetInnerHTML={{ __html: paragraphText }} />}
      {!!handleButtonClick && (
        <Button onClick={handleButtonClick} variant={buttonVariant}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default Card;
