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
        <Title title="Get in touch" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
          <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/oliviarossi/letschat'});return false;">let's chat</a>
            <div className="social-links">
              {/* <p className="contact-wrapper__text">
              {cta || ''}
            </p> */}
              <a
                target="_blank"
                rel="noopener noreferrer"
                // className="cta-btn cta-btn--resume"
                href={email ? `mailto:${email}` : 'https://github.com/cobidev/react-simplefolio'}
              >
                {btn}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                // className="cta-btn cta-btn--resume"
                href={resume}
              >
                resume
              </a>
              {networks &&
                networks.map((network) => {
                  const { id, name, url } = network;
                  return (
                    <a
                      key={id}
                      href={url || 'https://github.com/oliviarossi/oliviarossi-site'}
                      rel="noopener noreferrer"
                      target="_blank"
                      aria-label={name}
                    >
                      {name}
                    </a>
                  );
                })}
            </div>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
