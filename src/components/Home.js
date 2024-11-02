// src/components/Home.js
import React from 'react';
import './Home.css';
import { FaMapMarkerAlt, FaChevronDown } from 'react-icons/fa';

function Home() {
  // Scroll to About section
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="home" className="home">
      <div className="home-content">
        <h1 className="reveal-text">
          <span className="hi-text">Hi,</span>
          <span className="name-text"> I'm Fauzan Rizqan!</span>
        </h1>
        <div className="location reveal-text">
          <FaMapMarkerAlt className="location-icon" />
          <span>Canberra, Australia</span>
        </div>
        <button onClick={scrollToAbout} className="see-more-button">
          See More
          <FaChevronDown className="down-arrow-icon" />
        </button>
      </div>
    </div>
  );
}

export default Home;
