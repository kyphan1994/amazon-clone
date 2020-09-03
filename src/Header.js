import React from 'react';
import './Header.css';
import { BrowserRouter as Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className="header">
      {/* Logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />

        {/* Search box*/}
        <div className="header__Search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>

        {/* 3 Links */}
        {/* Basket icon with number */}
      </Link>
    </nav>
  );
}

export default Header;
