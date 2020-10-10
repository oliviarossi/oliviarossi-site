import React, { useState, useEffect } from 'react';
import Hero from './Hero';
// import Projects from './Projects/Projects';
//import Contact from './Contact';
import Footer from './Footer';

import { PortfolioProvider } from './context';

function App() {
  const [hero, setHero] = useState({});
  // const [projects, setProjects] = useState([]);
  //const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  // add about, projects to portfolio provider
  return (
    <PortfolioProvider value={{ hero, footer }}>
      <Hero />
      {/* <Projects /> */}
      {/* <Contact /> */}
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
