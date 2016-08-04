import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <div className="container">
      <div className="hero-flex text-xs-center">
        <h3>Lit Bot</h3>
        <p>Cat got your tongue? Ask Lit for an instant opener.</p>
        <div className="button-group">
          <a type="button" role="button" className="btn btn-primary message">Message me</a>
          <a type="button" role="button" className="btn btn-secondary github">Github</a>
        </div>
      </div>
    </div>
  );
}

Home.displayName = 'Home';
