import React, { Component } from 'react';
import './App.css';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ParallaxBackground from './components/ParallaxBackground';
import PortfolioPage from './pages/Portfolio';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParallaxBackground />
        <LandingPage />
        <AboutPage />
        <PortfolioPage />
      </div>
    );
  }
}

export default App;
