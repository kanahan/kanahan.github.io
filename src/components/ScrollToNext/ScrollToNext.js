import React from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

import './style.css';

const ScrollToNext = (props) => {

  const scrollToNextElement = () => {
    const { pageSelector } = props;
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  return (
    <div className="scroll-to-next" onClick={scrollToNextElement}>
      <div className="arrow bounce">
        <i className={`fas fa-angle-${props.direction === 'down' ? 'down' : 'double-up'} fa-3x`} href="#" />
      </div>
    </div>
  );
};

export default ScrollToNext;
