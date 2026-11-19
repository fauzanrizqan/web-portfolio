import { useState } from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { HiEnvelope, HiCalendarDays } from 'react-icons/hi2';
import Section from './Section.jsx';
import { links, formspreeId } from '../data/site.js';

function ContactForm() {
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(e.target),
      });
      if (!res.ok) throw new Error('Request failed');
      e.target.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return <p className="form-status success">Thanks! I'll get back to you within one business day.</p>;
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        What do you need help with?
        <textarea name="message" rows="5" required />
      </label>
      <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
      {status === 'error' && (
        <p className="form-status error">Something went wrong. Please try again or email me directly.</p>
      )}
    </form>
  );
}

export default function Contact() {
  const channels = [
    links.email && { href: `mailto:${links.email}`, label: links.email, icon: HiEnvelope },
    links.booking && { href: links.booking, label: 'Book a 20-minute call', icon: HiCalendarDays },
    links.linkedin && { href: links.linkedin, label: 'LinkedIn', icon: FaLinkedin },
    links.github && { href: links.github, label: 'GitHub', icon: FaGithub },
    links.youtube && { href: links.youtube, label: 'YouTube (music)', icon: FaYoutube },
  ].filter(Boolean);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something together"
      intro="Tell me about your project, timeline and budget. I usually reply within one business day."
      className="contact-section"
    >
      <div className={`contact ${formspreeId ? '' : 'contact-no-form'}`}>
        {formspreeId && <ContactForm />}
        <ul className="contact-channels">
          {channels.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                <Icon aria-hidden="true" /> {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
