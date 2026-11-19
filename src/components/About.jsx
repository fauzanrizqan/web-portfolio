import { useState } from 'react';
import { HiArrowPath, HiArrowDownTray } from 'react-icons/hi2';
import Section from './Section.jsx';
import { about, links } from '../data/site.js';
import headshot from '../assets/headshot.jpg';
import performing from '../assets/performing.jpg';

const photos = [
  { src: headshot, alt: 'Portrait of Fauzan Rizqan' },
  { src: performing, alt: 'Fauzan Rizqan performing on guitar' },
];

export default function About() {
  const [index, setIndex] = useState(0);
  const photo = photos[index];

  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="about">
        <figure className="about-photo">
          <img src={photo.src} alt={photo.alt} width="420" height="460" />
          <button
            className="photo-switch"
            onClick={() => setIndex((index + 1) % photos.length)}
            aria-label="Show next photo"
          >
            <HiArrowPath /> Next photo
          </button>
        </figure>
        <div className="about-text">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <div className="about-ctas">
            <a href="#contact" className="btn btn-primary">Work with me</a>
            {links.resume && (
              <a href={links.resume} className="btn btn-ghost" download>
                <HiArrowDownTray /> Download resume
              </a>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
