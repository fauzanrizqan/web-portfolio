import { FaGithub } from 'react-icons/fa';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import Section from './Section.jsx';
import { projects, links } from '../data/site.js';

// Placeholder entries are visible in `npm run dev` only.
const visible = projects.filter((p) => !p.placeholder || import.meta.env.DEV);

export default function Projects() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Projects & case studies"
      intro="A few things I've built, what problem they solved and what changed because of them."
    >
      {visible.length === 0 ? (
        <div className="card empty">
          <p>Case studies are on the way. In the meantime, my code is on GitHub.</p>
          <a className="btn btn-ghost" href={links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub /> View GitHub
          </a>
        </div>
      ) : (
        <div className="grid grid-3">
          {visible.map((p) => (
            <article key={p.title} className={`card project ${p.placeholder ? 'is-placeholder' : ''}`}>
              {p.placeholder && <span className="placeholder-tag">Placeholder · edit src/data/site.js</span>}
              <div className="project-media">
                {p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" /> : <span>{p.title}</span>}
              </div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <dl>
                  <dt>Problem</dt><dd>{p.problem}</dd>
                  <dt>Solution</dt><dd>{p.solution}</dd>
                  <dt>Result</dt><dd>{p.result}</dd>
                </dl>
                <ul className="tags" aria-label="Tech stack">
                  {p.stack.map((t) => <li key={t}>{t}</li>)}
                </ul>
                {(p.demo || p.code) && (
                  <div className="project-links">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        Live demo <HiArrowTopRightOnSquare />
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Code
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}
