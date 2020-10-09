import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email, resume, networks } = contact;

  return (
    <section id="contact">
        <Fade bottom duration={1000} delay={800} distance="30px">
            <div className="social-links">
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
    </section>
  );
};

export default Contact;
