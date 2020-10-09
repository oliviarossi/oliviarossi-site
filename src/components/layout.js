import React from 'react';
import { Link } from "gatsby"

export default function Layout({ children }) {

  return (
    <section id="layout">
    <div style={{ margin: `0 auto`, maxWidth: `100vw`, padding: `0` }}>
      <header className="hero-head">
        <Link to="/">Olivia Rossi</Link>
        </header>
      {children}
    </div>
    </section>
  );
}
