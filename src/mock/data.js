import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Olivia Rossi',
  lang: 'en',
  description: 'Product Manager',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Olivia Rossi',
  subtitle: 'is a product manager, designer, lighting specialist, and so-called engineer based in Montreal.',
  cta: 'scroll',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: 'I have always had an eye for design. But my passion for design goes beyond that which we see—there is beauty in efficiency, in progression, and in a well-oiled machine.',
  paragraphTwo: 'As a child, I wanted to be an architect, a scientist, and later a mechanical engineer. Since then, I realized that a well-designed strategy and an efficient team are what truly are at the core of every successful product.',
  paragraphThree: 'My goal is to utilize my engineering mindset to develop products that boast functional and practical design features while meeting customer needs. I bring over 3 years of multi-disciplinary experience in both the public and private sectors to find innovative solutions to complex problems. I am a skilled communicator, adept at delivering presentations, and leading trainings for various audiences. I am also an avid supporter of Women in Technology and Women in Product.',
  paragraphFour: 'Currently, I lead the Lighting Design team at RTE. I gather feedback and outline requirements, coordinate large-scale lighting projects, and follow best practices to exceed client expectations. I am forever curious and seeking new challenges in a product role in the tech industry that allows me to think strategically, design for efficiency, and bring creative ideas to life.',
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
