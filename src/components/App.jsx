import React, { Component, useState, useEffect } from 'react';
import Hero from './Hero';
//import Contact from './Contact';
import Footer from './Footer';

import { PortfolioProvider } from './context';

function App() {
  const [hero, setHero] = useState({});
  //const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  return (
    <PortfolioProvider value={{ hero, footer }}>
      <Hero />
      {/* <Contact /> */}
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
