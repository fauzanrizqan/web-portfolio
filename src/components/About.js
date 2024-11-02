import React from 'react';
import './About.css';
import profilePic from './face-img.JPG'; // Adjust path as necessary
import pict2 from './pict2.jpg'; // Adjust path as necessary
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

function About() {
  return (
    <div id="about-section" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Greetings! My name is Fauzan. I am a computer science graduate with a passion for Machine Learning/Data Science and Software Development. 
             I'm proficient in multiple programming languages and have experience with various tools and technologies related to multiple field of ML
             (Computer Vision, NLP, Physics, etc) and software development (Front-end, Back-end, Mobile Development, etc). Beyond my technical endeavors, 
             I am also a musician and a skilled guitar player where I enjoy creating music and making covers that I shares on my social media. So feel free to check them out below!
             Aside from that, I am also a big gamer and a sneakerhead, so if you want to talk about games or sneakers, I'm your guy! Thank you for visiting my website, it was nice to meet you!
          </p>
          <div className="resume-download">
        <a href="/path/to/resume.pdf" download="Fauzan_Rizqan_Resume.pdf">Click here to download my Resume</a>
      </div>
      <div className="social-media">
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
        </div>
        <div className="about-images">
          <img src={pict2} alt="Fauzan Rizqan performing" className="about-image two"/>
          <img src={profilePic} alt="Fauzan Rizqan" className="about-image one"/>
        </div>
        
      </div>
    </div>
  );
}

export default About;
