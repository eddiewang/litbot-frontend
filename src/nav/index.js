import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import routes from '../routes';

const mapStateToProps = state => ({ title: state.get('title') });

export let Nav = ({ title }) => (
  <nav className="navbar bg-faded navbar-light navbar-fixed-bottom">
    <a className="navbar-brand" href="/">{title}</a>
    <div className="nav navbar-nav pull-xs-right">
      {routes.map(r => <Link className="nav-item nav-link" key={r.path} to={r.path}>{r.title}</Link>)}
    </div>
  </nav>
);

Nav.displayName = 'Nav';

export default connect(mapStateToProps)(Nav);
