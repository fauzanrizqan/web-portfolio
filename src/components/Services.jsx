import Section from './Section.jsx';
import { services } from '../data/site.js';
import { serviceIcons } from './icons.jsx';

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="How I can help"
      intro="Whether you need a model, a product feature or a whole app, you get one person who understands both the ML and the software around it."
    >
      <div className="grid grid-4">
        {services.map((s) => {
          const Icon = serviceIcons[s.icon];
          return (
            <article key={s.title} className="card service">
              <span className="service-icon">{Icon && <Icon />}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
