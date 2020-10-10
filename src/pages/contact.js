import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout';

const Contact = () => {
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
        <title>Olivia Rossi | Contact</title>
        <html lang="en" />
        <meta name="description" content="You wanted to learn more about Olivia? Here it is." />
      </Helmet>
      <section id="contact">
          <Layout>
        <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="social-links">
            <a
              href="https://calendly.com/oliviarossi/letschat"
              target="_blank"
              rel="noopener noreferrer"
            >
              let's chat
            </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={'mailto:hello@oliviarossi.org'}
                aria-label="email"
              >
                email
              </a> <a
                target="_blank"
                rel="noopener noreferrer"
                href={'https://twitter.com/_oliviarossi'}
                aria-label="twitter"
              >
                twitter
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={'https://www.linkedin.com/in/rossiolivia/'}
                aria-label="linkedin"
              >
                linkedin
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={'https://github.com/oliviarossi'}
                aria-label="twitter"
              >
                github
              </a>
            </div>
        </Fade>
        </Layout>
    </section>
    </>
  );
};

export default Contact;
