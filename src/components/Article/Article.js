import React, { createElement, useEffect, useState } from 'react';
import classNames from 'classnames';
import { getUniqueId } from '../../helpers/uniqueId';
import './styles.scss';

const Article = ({
  headingTag = 'h3',
  headingText,
  className = '',
  handleButtonClick,
  buttonText,
  paragraphText,
  props,
}) => {
  const [uid] = useState(getUniqueId());

  useEffect(() => {
    const ps = document.querySelectorAll('.article__copy');
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove'](
          'article__copy--truncated'
        );
      }
    });

    ps.forEach((p) => {
      observer.observe(p);
    });
  });

  const Tag = ({ as, children, ...props }) => createElement(as, props, children);
  return (
    <div className={classNames('article', className)} {...props}>
      <Tag as={headingTag} className="article__heading" dangerouslySetInnerHTML={{ __html: headingText }} />
      <>
        <input type="checkbox" id={`article-checkbox-${uid}`} />
        {paragraphText && (
          <div className="article__copy" dangerouslySetInnerHTML={{ __html: paragraphText }} />
        )}
        {!!handleButtonClick && (
          <label
            onClick={handleButtonClick}
            htmlFor={`article-checkbox-${uid}`}
            role="button"
            className="article__btn-read-more"
          >
            {buttonText}
          </label>
        )}
      </>
    </div>
  );
};

export default Article;
