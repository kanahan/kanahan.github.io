import React from 'react';
import Nav from '../../components/Nav';
import SocialIcons from '../../components/SocialIcons/SocialIcons';
import ScrollToNext from '../../components/ScrollToNext/ScrollToNext';
import pic from '../../components/images/pic.png';

import './style.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Nav />
      <main>
        <div className="pic"><img src={pic} alt="" style={{ borderRadius: "50%" }} /></div>
        <div className="intro-name">Hello, I'm Karson!</div>
        <div className="tagline">
          Full Stack Dev | Open-Source Enthusiast | Ninja
          </div>
        <SocialIcons />
      </main>
      <ScrollToNext pageSelector='.about-page' direction="down" />
    </div>
  );
};

export default LandingPage;
