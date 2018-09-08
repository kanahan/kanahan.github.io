import React, { Component } from 'react';
import { toElement as scrollToElement } from '../../utils/scroll';

import './style.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  scrollToPage(pageSelector) {
    const nextPage = document.querySelector(pageSelector);
    scrollToElement(nextPage);
  }

  render() {
    return (
      <nav>
        <div
          className="menu_item"
          onClick={(e) => this.scrollToPage('.about-page')}
        >
          About
          </div>
        <div
          className="menu_item"
          onClick={(e) => this.scrollToPage('.portfolio-page')}
        >
          Portfolio
          </div>
      </nav>
    );
  }
}

export default Nav;
