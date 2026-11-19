import Section from './Section.jsx';
import { skills } from '../data/site.js';
import { skillIcons } from './icons.jsx';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & tools">
      <div className="grid grid-3">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group} className="card skill-group">
            <h3>{group}</h3>
            <ul className="skill-list">
              {list.map((name) => {
                const Icon = skillIcons[name];
                return (
                  <li key={name}>
                    {Icon && <Icon aria-hidden="true" />} {name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
