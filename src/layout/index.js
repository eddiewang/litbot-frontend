import React from 'react';
import Nav from '../nav';

import './index.scss';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Nav />
      <main id="content">{children}</main>
    </div>
  );
}

Layout.displayName = 'Layout';
