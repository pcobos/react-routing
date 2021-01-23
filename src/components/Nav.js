import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const style = {
    color: 'white',
    textDecoration: 'none'
  };

  return(
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        {/* In order to turn <li> JSX elements we need to wrap them in the*/}
        <Link style={style} to="/about">
          <li>About</li>
        </Link>
        <Link style={style} to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>
  )
};

export default Nav;