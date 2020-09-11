import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Olivia Rossi',
  lang: 'en',
  description: 'Welcome to my site',
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Olivia',
  subtitle: 'A product leader and an aspiring poly-math',
  cta: 'scroll',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/121zcjCI6nqxtmMBxVWoCisMILuSRfgg_/view?usp=sharing'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Like what you see?',
  btn: 'Contact',
  email: 'oliviarossi@pm.me',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/_oliviarossi',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/rossiolivia/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/oliviarossi',
    },
  ],
};
