import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);

  return (
    <footer className="footer navbar-static-bottom">
      {/* <hr /> */}
      <p className="footer__text">{new Date().getFullYear()} © Olivia Rossi</p>
    </footer>
  );
};

export default Footer;
