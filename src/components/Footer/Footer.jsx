import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        {/* <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span> */}
        <div className="social-links">
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
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Website designed by me using {''}
            <a href="https://www.gatsbyjs.com/" target="_blank" rel="noopener noreferrer">
              GatsbyJS
            </a> and powered by {''}
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
              Netifly
            </a>. Last updated September 2020.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
