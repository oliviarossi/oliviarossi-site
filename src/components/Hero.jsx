import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'gatsby';
import PortfolioContext from './context';
import Layout from './layout';

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
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-h1">
            Design supervisor
            <br />
            Aspiring product manager
            <br />
            Based in Montreal
            </h1>
            <p className="hero-p">Get in{' '}
            <Link to="/contact">touch</Link>.{' '}<br />Here's some{' '}
            <Link to="/about">information</Link>.
            </p>
        </Fade>
      </Layout>
    </section>
  );
};

export default Header;
