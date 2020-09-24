import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';


const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
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
