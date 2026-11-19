import { useEffect, useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';

const items = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    document.querySelectorAll('main section[id]').forEach((s) => observer.observe(s));
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${open ? 'nav-open' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="brand" onClick={close}>
          fauzan<span>rizqan</span>
        </a>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiXMark /> : <HiBars3 />}
        </button>
        <nav id="nav-links" className="nav-links" aria-label="Main">
          {items.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className={active === i.id ? 'active' : ''}
              aria-current={active === i.id ? 'true' : undefined}
              onClick={close}
            >
              {i.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary btn-sm" onClick={close}>
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
