import React from 'react';
import './About.css';
import profilePic from './face-img.JPG'; // Make sure the path to your image is correct
import pict2 from './pict2.jpg';

function About() {
  return (
    <div id="about-section" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p> An enthusiastic and responsible individual with a strong
 passion for Data Science, Machine Learning, and Software
 Engineering. My interests extend to exploring cutting-edge
 solutions and acquiring advanced skills across the broader
 field of computer science, as I continuously seek
 opportunities to innovate and deepen my expertise in
 these domains. </p>
          {/* Add more personal description here */}
        </div>
        <img src={profilePic} alt="Fauzan Rizqan" className="about-image" />
      </div>
    </div>
  );
}

export default About;
