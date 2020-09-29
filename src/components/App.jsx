import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
// import About from './About/About';
// import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

function App() {
  const [hero, setHero] = useState({});
  // const [about, setAbout] = useState({});
  // const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  // add about, projects to portfolio provider
  return (
    <PortfolioProvider value={{ hero, contact, footer }}>
      <Hero />
      {/* <About /> */}
      {/* <Projects /> */}
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
