import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <li>About</li>
        <li>Shop</li>
      </ul>
    </nav>
  )
}

export default Nav;