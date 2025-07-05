
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { BiCart, BiUser, BiSearch, BiMenu, BiX, BiHeart } from 'react-icons/bi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  return (
    <>
      <div className="navbar">
        <h2 className="logo">SHOPBLIND</h2>

        <div className="search_container_mobile">
          <BiSearch className="search_icon_inside_mobile" />
          <input type="text" placeholder="Click. Shop. Smile." id="search_mobile" />
        </div>

        <div className="search_container">
          <BiSearch className="search_icon_inside" />
          <input type="text" placeholder="Click. Shop. Smile." id="search" />
        </div>

        <div className="nav_right">
          <div className="links">
            <div className="option">
              <Link to="/">HOME</Link>
              <Link to="/contact">CONTACT</Link>
              <Link to="#footer">ABOUT</Link>
            </div>

            <div className="cart">
              <Link to="/wishlist">
                <BiHeart className="nav_icon" />
              </Link>
            </div>

            <div className="cart">
              <Link to="/cart">
                <BiCart className="nav_icon" />
              </Link>
              <div className="cart_qty">0</div>
            </div>

            <Link to="/login">
              <BiUser className="nav_icon" />
            </Link>
          </div>

          {/* 👉 Menu toggle icon (changes between hamburger and close) */}
          {menuOpen ? (
            <BiX className="menu_icon" onClick={() => setMenuOpen(false)} />
          ) : (
            <BiMenu className="menu_icon" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Optional: Menu background overlay */}
      <div
        className={`menu_overlay ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div className={`nav_links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
        <Link to="/product" onClick={() => setMenuOpen(false)}>PRODUCT</Link>
        <Link to="#footer" onClick={() => setMenuOpen(false)}>ABOUT</Link>
        <Link to="/wishlist" onClick={() => setMenuOpen(false)}>
          <BiHeart className="nav_icon" />
        </Link>
        <Link to="/cart" onClick={() => setMenuOpen(false)}>
          <BiCart className="nav_icon" />
        </Link>
        <Link to="/login" onClick={() => setMenuOpen(false)}>
          <BiUser className="nav_icon" />
        </Link>
        <h2 className="logo_mobile">SHOPBLIND</h2>
      </div>
    </>
  );
};

export default Navbar;
