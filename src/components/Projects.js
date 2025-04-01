// src/components/Projects.js
import React from 'react';
import HTMLFlipBook from "react-pageflip";
import './Projects.css'; // Make sure this is correctly imported

const Page = React.forwardRef((props, ref) => (
  <div className="demoPage" ref={ref}>
    <h1>Page Header</h1>
    <p>{props.children}</p>
    <p>Page number: {props.number}</p>
  </div>
));

function Projects() {
  return (
    <div className="html-flip-book"> {/* Additional container if needed for specific styling */}
      <HTMLFlipBook width={300} height={500}>
        <Page number="1">Lorem ipsum dolor sit amet...</Page>
        <Page number="2">Consectetur adipiscing elit...</Page>
        <Page number="3">Sed do eiusmod tempor...</Page>
        <Page number="4">Incididunt ut labore et dolore magna aliqua...</Page>
      </HTMLFlipBook>
    </div>
  );
}

export default Projects;