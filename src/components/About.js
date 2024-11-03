import React from 'react';
import './About.css';
import profilePic from './face-img.JPG'; // Adjust path as necessary
import pict2 from './pict2.jpg'; // Adjust path as necessary
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa';
import { FaArrowsRotate } from "react-icons/fa6";

function About() {
  return (
    <div id="about-section" className="about">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>Greetings! My name is Fauzan. I am a computer science graduate with a passion for Machine Learning/Data Science and Software Development. 
             I'm proficient in multiple programming languages and have experience with various tools and technologies related to multiple fields of ML
             (Computer Vision, NLP, Physics, etc) and software development (Front-end, Back-end, Mobile Development, etc). Beyond my technical endeavors, 
             I am also a musician and a skilled guitar player where I enjoy creating music and making covers that I share on my social media. Feel free to check them out below! Aside from that, I am also a gamer and a sneakerhead, so if you want to talk about video games or sneakers, I'm your guy!</p>
          <p>Thank you for visiting my website!</p>
          <div className="resume-download">
            <a href="/path/to/resume.pdf" download="Fauzan_Rizqan_Resume.pdf">Fauzan's Resume</a>
          </div>
          <div className="social-media">
            <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
        <div className="about-images">
          <img src={pict2} alt="Fauzan Rizqan performing" className="about-image two"/>
          <img src={profilePic} alt="Fauzan Rizqan" className="about-image one"/>
          <div className="next-photo">
            <button>
              Next Photo <FaArrowsRotate className="rotate-arrow"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
