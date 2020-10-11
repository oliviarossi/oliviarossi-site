import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import PortfolioContext from './context';
import Layout from './layout';
import Contact from './Contact';

const Header = () => {
  const { hero } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero">
      <Layout>
          <h1 className="hero-h1">
            Design supervisor
            <br />
            Aspiring product manager
            <br />
            Based in Montreal, currently @ <a href="realtermenergy.com">RTE</a>
          </h1>
          <Contact />
      </Layout>
    </section>
  );
};

export default Header;
