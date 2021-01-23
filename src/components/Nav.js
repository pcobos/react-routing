import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return(
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        {/* In order to turn <li> JSX elements we need to wrap them in the*/}
        <Link path="/about">
          <li>About</li>
        </Link>
        <Link path="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  )
};

export default Nav;