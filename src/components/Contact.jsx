import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'gatsby';

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
      <section id="contact">
        <Fade top duration={1000} delay={800} distance="10px">
          <div className="social-links">
            <Link to="/about">profile</Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={'mailto:hello@oliviarossi.me'}
              aria-label="email"
            >
              email
            </a>{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={'https://twitter.com/olirossi'}
              aria-label="twitter"
            >
              twitter
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={'https://www.linkedin.com/in/olirossi/'}
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
      </section>
    </>
  );
};

export default Contact;
