import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import Section from './Section.jsx';
import { experience } from '../data/site.js';

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Education & experience">
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.title} className="timeline-item">
            <span className="timeline-icon" aria-hidden="true">
              {e.type === 'work' ? <FaBriefcase /> : <FaGraduationCap />}
            </span>
            <div className="card timeline-card">
              <p className="timeline-period">{e.period}</p>
              <h3>{e.title}</h3>
              <p className="timeline-org">{e.org}</p>
              <p>{e.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
