import * as React from 'react';

export const NavBar: React.FC = () => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="#">
      PropertyCrossReact
    </a>
    <button className="btn btn-info my-2 my-sm-0">Faves</button>
  </nav>
);
