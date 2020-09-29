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
        <h1 className="hero-h1">
          Hey, I'm Olivia. I'm a <span>lighting</span> designer and an aspiring product manager
          based in Montreal.
        </h1>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-h2">
            In reality, I wear multiple hats—every day is different. I constantly alternate between
            designer, engineer, lighting specialist, and product leader. <br />
            <br />
            My goal is to one day become a product manager in an innovative consumer-centric
            company. As a self-proclaimed techie, I am passionate about the ethics of technology and
            an avid supporter of women in tech.
          </h1>
          <h1 className="hero-link">
            <a href="https://calendly.com/oliviarossi/letschat">Let's chat.</a>
          </h1>
          <p className="hero-micro">
            Job opportunities are welcome; looking for a full-time position in a small to medium
            sized startup/company.
          </p>
          {/* <div className="hero-h1__image">
            <LogoImg alt="logo" filename={img} />
          </div> */}
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
