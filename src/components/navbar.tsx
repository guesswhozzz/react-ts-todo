import React from 'react';
import { NavLink } from 'react-router-dom';
export const Navbar: React.FC = () => {

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">React and TypeScript</a>
          </li>
          <li>
            <a href="badges.html">todo</a>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
