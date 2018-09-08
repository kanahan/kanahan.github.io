import React from 'react';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import portfolioItems from './portfolio-items.json';

import './style.css';

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <div className="content-grid">
        <h1>Portfolio</h1>
        <div className="portfolio-wrapper">
          {portfolioItems.map((item, i) => (
            <div className='portfolio-item' key={i}>
              <div className='portfolio-item_title'>
                {item.title}
              </div>
              <div className='portfolio-item_desc'>
                {item.description}
              </div>
              <div className='portfolio-item_icon'>
                {item.icons.map((item, i) => (
                  <i className={`fab fa-${item} fa-2x`} style={{ margin: '0 5px' }} key={i}></i>
                ))}
              </div>
              <div className='portfolio-item_links'>
                <a target="_blank" rel="noopener noreferrer" href={item.link.href}>{item.link.text}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ScrollToNext pageSelector=".landing-page" direction="up" />
    </div >
  );
};

export default PortfolioPage;
