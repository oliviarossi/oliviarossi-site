import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree, paragraphFour, resume } = about;

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
    <section id="about">
      <Container>
        <Row className="about-wrapper">
          <Col md={4} sm={12}>
            <Title title="About"/>
            {resume && (
                <span className="d-flex mt-3">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn cta-btn--resume"
                    href={resume}
                  >
                    Resume
                  </a>
                </span>
              )}
          </Col>
          <Col md={6} sm={12} className="about-wrapper__info">
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <p className="about-wrapper__info-text">{paragraphOne || ''}</p>
              <p className="about-wrapper__info-text">{paragraphTwo || ''}</p>
              <p className="about-wrapper__info-text">{paragraphThree || ''}</p>
              <p className="about-wrapper__info-text">{paragraphFour || ''}</p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
