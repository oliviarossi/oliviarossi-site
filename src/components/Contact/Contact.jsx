import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email, resume, networks } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="Get in touch 👇🏻" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <div className="social-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={'mailto:hello@oliviarossi.org'}
                aria-label="email"
              >
                email
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  'https://www.notion.so/oliviarossi/Olivia-Rossi-24dadad53b1c470180680a387b08d759'
                }
                aria-label="resume"
              >
                resume
              </a>
              <a
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
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
