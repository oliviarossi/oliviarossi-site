import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import LogoImg from '../Image/LogoImg';

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
    <section id="hero" className="jumbotron">
      <Container>
        <header className="hero-head">
          <a href="#hero" target="_blank" rel="noopener noreferrer">
            Olivia Rossi
          </a>
        </header>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-h1">
            Hey, nice to meet you. I'm a <span>lighting</span> designer and an aspiring product
            manager based in Montreal. I actually wear multiple hats—every day is different. I
            constantly alternate between designer, engineer, lighting specialist, team lead,
            (front-end dev), and product leader.
            <br />
            <br />
            My goal is to one day become a product manager in an innovative consumer-centric
            company. As a self-proclaimed techie, I am passionate about the ethics of technology and
            an avid supporter of women in tech.
            <br />
            <br />
            👋🏻{' '}
            <a
              href="https://calendly.com/oliviarossi/letschat"
              target="_blank"
              rel="noopener noreferrer"
            >
              Let's chat
            </a>
          </h1>
          <p className="hero-micro">
            Job opportunities are welcome; looking for a full-time position in a small to medium
            sized startup/company.
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
