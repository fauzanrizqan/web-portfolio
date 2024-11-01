// src/components/Home.js
import React from 'react';
import './Home.css';
import { FaMapMarkerAlt, FaChevronDown} from 'react-icons/fa';

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
      <h1>Hi, I'm Fauzan Rizqan!</h1>
      <div className="location">
        <FaMapMarkerAlt className="location-icon" />
        <span>  Canberra, Australia</span>
        <button onClick={scrollToAbout} className="see-more-button">
        See More
        <FaChevronDown className="down-arrow-icon" />
      </button>
      </div>
    </div>
  );
}

export default Home;
