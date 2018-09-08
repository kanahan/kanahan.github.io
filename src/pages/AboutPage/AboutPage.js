import React from 'react';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';

import './style.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="content-grid">
        <h1>About</h1>
        <div className="about-wrapper">
          <div className="about-content">
            <p>
              I like <span className="highlight">JavaScript</span> and
              everything in web.
            </p>
            <p>
              When my dev senses kick-in I build presumably{' '}
              <span className="highlight"> awesome stuff</span>. I constantly learning new things when I have time.  I stay close to
              the community and try to keep tabs with the pace at which the web
              is evolving.
            </p>
            <p>
              I built this site <span className="highlight">from scratch</span>.
              By scratch, I mean absolutely from scratch{' '}
              <span className="highlight">
                without any UI library/framework
              </span>{' '}
              (except React though) and had so much fun along the way.
            </p>
            <p>
              React-Redux, Node.js, .Net and
              AWS are the main tricks up my sleeve. I am also obsessed with making the web look pretty with CSS.
            </p>
            <p className="text-emoji">
              ¯\_(ツ)_/¯
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" direction="down" />
    </div >
  );
};

export default AboutPage;
