import { HiMapPin, HiArrowRight } from 'react-icons/hi2';
import { profile, links } from '../data/site.js';
import Strings from './Strings.jsx';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
      <div className="hero-inner">
        {profile.available && (
          <p className="badge">
            <span className="dot" /> Available for new projects
          </p>
        )}
        <p className="hero-name">
          {profile.name} · {profile.role}
        </p>
        <h1>{profile.headline}</h1>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-ctas">
          <a href="#work" className="btn btn-primary">
            See my work <HiArrowRight />
          </a>
          <a href={links.booking || '#contact'} className="btn btn-ghost"
             {...(links.booking ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
            {links.booking ? 'Book a call' : 'Get in touch'}
          </a>
        </div>
        <p className="hero-location">
          <HiMapPin /> {profile.location} · working with clients worldwide
        </p>
      </div>
      <Strings />
      </div>
    </section>
  );
}
