// ---------------------------------------------------------------------------
// All of the site's content lives in this file. Edit it here; the components
// only render what is below.
//
// Anything left as an empty string ('') is hidden on the site, so you never
// ship a dead link. Search this file for "TODO" to find what still needs you.
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Fauzan Rizqan',
  role: 'Machine Learning Engineer & Full-Stack Developer',
  headline: 'I build AI features and web apps that ship.',
  intro:
    'From computer vision and NLP models to the web and mobile apps that put them in front of users, I take ideas from prototype to production.',
  location: 'Canberra, Australia',
  // Set to false to hide the "Available for new projects" badge.
  available: true,
};

export const links = {
  github: 'https://github.com/fauzanrizqan',
  linkedin: '', // TODO: e.g. 'https://www.linkedin.com/in/your-handle'
  email: '', // TODO: e.g. 'hello@fauzanrizqan.com'
  youtube: '', // TODO: your music channel, or leave empty
  // Put your resume PDF in /public (e.g. public/Fauzan_Rizqan_Resume.pdf)
  // and set this to '/Fauzan_Rizqan_Resume.pdf'.
  resume: '', // TODO
  // Optional booking link (Calendly, Cal.com...). Shown as "Book a call".
  booking: '', // TODO
};

// Contact form. Create a free form at https://formspree.io and paste its id
// (the part after /f/). While empty, the form is hidden and visitors get the
// email / LinkedIn buttons instead.
export const formspreeId = ''; // TODO

export const proof = [
  { value: '3.74 / 4.00', label: 'GPA, Computer Science (UI)' },
  { value: 'ANU', label: "Chancellor's International Scholarship" },
  { value: '180+', label: 'students taught as a TA' },
  { value: '2', label: 'degrees: ANU & University of Indonesia' },
];

export const services = [
  {
    icon: 'brain',
    title: 'Custom ML models',
    text: 'Computer vision, NLP and predictive models trained on your data, evaluated honestly and packaged for production (PyTorch, TensorFlow, ONNX).',
  },
  {
    icon: 'spark',
    title: 'AI features for your product',
    text: 'Add search, classification, recommendations or LLM-powered workflows to an existing app, with an API your team can maintain.',
  },
  {
    icon: 'code',
    title: 'Web & mobile apps',
    text: 'Full-stack apps with React, Svelte, Django, Spring Boot and Flutter, from the database to a polished, responsive interface.',
  },
  {
    icon: 'chart',
    title: 'Data analysis & dashboards',
    text: 'Clean, analyse and visualise your data with Python, Pandas and PostgreSQL so you can make decisions with confidence.',
  },
];

// Case studies. Replace these with your real projects. Entries marked
// `placeholder: true` are only shown while you run `npm run dev`; they are
// left out of the production build so the live site never shows fake work.
// Images: put screenshots in src/assets and import them, or use a URL.
export const projects = [
  {
    placeholder: true, // TODO: delete this line once the content is real
    title: 'Your best ML project',
    problem: 'One sentence on the problem and who had it.',
    solution: 'What you built and the key technical decision.',
    result: 'The outcome in numbers: accuracy, latency, users, time saved.',
    stack: ['PyTorch', 'FastAPI', 'Docker'],
    image: '',
    demo: '',
    code: '',
  },
  {
    placeholder: true,
    title: 'A full-stack web app',
    problem: 'Who needed it and why existing tools fell short.',
    solution: 'The architecture and the features that mattered most.',
    result: 'Adoption, feedback or performance you can point to.',
    stack: ['React', 'Django', 'PostgreSQL'],
    image: '',
    demo: '',
    code: '',
  },
  {
    placeholder: true,
    title: 'A mobile or data project',
    problem: 'The question or pain point.',
    solution: 'How you approached it.',
    result: 'What changed because of it.',
    stack: ['Flutter', 'Pandas'],
    image: '',
    demo: '',
    code: '',
  },
];

export const about = {
  paragraphs: [
    "I'm a Computer Science and Advanced Computing (Honours) graduate from the University of Indonesia and the Australian National University, specialising in machine learning.",
    'I work across the stack: training and evaluating models, then building the APIs and interfaces that make them useful. I care about clear communication, honest metrics and code that the next person can maintain.',
    "Outside of work I'm a guitarist who records covers, and a sneaker enthusiast.",
  ],
};

// Most recent first.
export const experience = [
  {
    type: 'education',
    period: '2022 – 2024',
    title: 'Bachelor of Advanced Computing (Honours), Machine Learning',
    org: 'Australian National University, Canberra',
    text: "Awarded the ANU Chancellor's International Scholarship for academic excellence.",
  },
  {
    type: 'work',
    period: 'Aug 2021 – Jun 2022',
    title: 'Teaching Assistant, Linear Algebra & Automata Theory',
    org: 'University of Indonesia, Depok',
    text: 'Ran tutorials, prepared course materials and graded work for more than 180 students.',
  },
  {
    type: 'education',
    period: '2020 – 2024',
    title: 'Bachelor of Computer Science (2+2 double degree with ANU)',
    org: 'University of Indonesia, Depok',
    text: 'Graduated with a GPA of 3.74 / 4.00.',
  },
];

export const skills = {
  'Machine learning & data': ['PyTorch', 'TensorFlow', 'ONNX', 'Pandas', 'NumPy', 'PostgreSQL'],
  'Web & mobile': ['React', 'Svelte', 'Node.js', 'Django', 'Spring Boot', 'Flutter'],
  Languages: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'Haskell'],
};
