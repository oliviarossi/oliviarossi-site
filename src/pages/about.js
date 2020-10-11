import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';

const About = () => {
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
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Olivia Rossi | Information</title>
        <html lang="en" />
        <meta name="description" content="You wanted to learn more about Olivia? Here it is." />
      </Helmet>
      <section id="about">
        <Layout>
          <Container>
            {/* <-- about --> */}
            <Row className="about-wrapper">
              <Col md={4} sm={12}>
                <Fade top={isDesktop} bottom={isMobile} duration={500} distance="30px">
                  <h2 className="about-wrapper__title">About</h2>
                </Fade>
              </Col>
              <Col md={6} sm={12} className="about-wrapper__info">
                <Fade left={isDesktop} bottom={isMobile} duration={500} distance="30px">
                  <p className="about-wrapper__info-text">
                    I have always had an eye for design. But my passion for design goes beyond that
                    which we see—there is beauty in efficiency, in progression, and in a well-oiled
                    machine.
                  </p>
                  <p className="about-wrapper__info-text">
                    As a child, I wanted to be an architect, a scientist, and later a mechanical
                    engineer. Since then, I realized that a well-designed strategy and an efficient
                    team are what truly are at the core of every successful product.
                  </p>
                  <p className="about-wrapper__info-text">
                    My goal is to utilize my engineering mindset to develop products that boast
                    functional and practical design features while meeting customer needs. I bring
                    over 3 years of multi-disciplinary experience in both the public and private
                    sectors to find innovative solutions to complex problems. I am a skilled
                    communicator, adept at delivering presentations, and leading trainings for
                    various audiences. I am also an avid supporter of Women in Technology and Women
                    in Product.
                  </p>
                  <p className="about-wrapper__info-text">
                    Currently, I lead the Lighting Design team at RTE. I gather feedback and outline
                    requirements, coordinate large-scale lighting projects, and follow best
                    practices to exceed client expectations. I actually wear multiple hats—every day
                    is different. I constantly alternate between designer, engineer, lighting
                    specialist, team lead, <span>front-end dev</span>, and product leader.
                  </p>
                  <p className="about-wrapper__info-text">
                    I am forever curious and seeking new challenges in a product role in the tech
                    industry that allows me to think strategically, design for efficiency, and bring
                    creative ideas to life.
                  </p>
                  <p className="about-wrapper__info-text">
                    Job opportunities are welcome; looking for a full-time position in a small to
                    medium sized tech startup/company.
                  </p>
                  <p className="about-wrapper__info-text">
                    You can{' '}
                    <a
                      href="https://calendly.com/oliviarossi/letschat"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      book some time
                    </a>{' '}
                    with me or view my resume{' '}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        'https://www.notion.so/oliviarossi/Olivia-Rossi-24dadad53b1c470180680a387b08d759'
                      }
                      aria-label="resume"
                    >
                      here
                    </a>
                    .
                  </p>
                </Fade>
              </Col>
            </Row>
            {/* <-- Quick Facts --> */}
            <Row className="about-wrapper">
              <Col md={4} sm={12}>
                <Fade top={isDesktop} bottom={isMobile} duration={500} distance="30px">
                  <h2 className="about-wrapper__title">Quick Facts</h2>
                </Fade>
              </Col>
              <Col md={6} sm={12} className="about-wrapper__info">
                <Fade left={isDesktop} bottom={isMobile} duration={500} distance="30px">
                  <p className="about-wrapper__info-text-list">
                   <li>Studied Mechanical Engineering with a specialization in 3D Design and
                    Manufacturing</li>
                    <li> Published a <a href="https://www.emerald.com/insight/content/doi/10.1108/IJESM-10-2018-0009/full/html">research article</a> on the benefits and environmental potential
                    of microreactors</li>
                    <li> Worked in security, administration, law, human resources, and aerospace
                    engineering</li>
                    <li> Originally wanted to be an astrophysicist, but decided to pursue product
                    management after realizing that my interests lie in up and coming technologies</li>
                  </p>
                </Fade>
              </Col>
            </Row>
            {/* <-- colophon --> */}
            <Row className="about-wrapper">
              <Col md={4} sm={12}>
                <Fade top={isDesktop} bottom={isMobile} duration={500} distance="30px">
                  <h2 className="about-wrapper__title">Colophon</h2>
                </Fade>
              </Col>
              <Col md={6} sm={12} className="about-wrapper__info">
                <Fade left={isDesktop} bottom={isMobile} duration={500} distance="30px">
                  <p className="about-wrapper__info-text">
                    Website designed by me using {''}
                    <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">
                      GatsbyJS
                    </a>{' '}
                    and powered by {''}
                    <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                      Netifly
                    </a>
                    . Typset in{' '}
                    <a
                      href="https://fonts.google.com/specimen/Inter?query=inter"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Inter
                    </a>
                    . Last updated October 2020.
                    <br />
                    <br />
                    <br />
                  </p>
                </Fade>
              </Col>
            </Row>
          </Container>
        </Layout>
      </section>
    </>
  );
};

export default About;
