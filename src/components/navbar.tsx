import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">React + TS</a>
          </li>
          <li>
            <a href="badges.html">todo</a>
          </li>
          <li>
            <a href="collapsible.html">about</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
