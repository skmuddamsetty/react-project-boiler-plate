import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <div>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Page 1
    </NavLink>
    <NavLink to="/page2" activeClassName="is-active">
      Page 2
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </div>
);
export default NavBar;
