import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { profile, links } from '../data/site.js';

export default function Footer() {
  const social = [
    links.github && { href: links.github, label: 'GitHub', icon: FaGithub },
    links.linkedin && { href: links.linkedin, label: 'LinkedIn', icon: FaLinkedin },
    links.youtube && { href: links.youtube, label: 'YouTube', icon: FaYoutube },
  ].filter(Boolean);

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <ul>
          {social.map(({ href, label, icon: Icon }) => (
            <li key={href}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
