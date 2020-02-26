import React from "react";
import "./Header.css";

const toggle = () => {
    let mainNav = document.getElementById('js-menu');
    mainNav.classList.toggle('active');
}

const Header = () => {
  return (
    <div>
      <header>
        <nav className='navbar'>
            <span className="navbar-toggle" 
            id="js-navbar-toggle" onClick={toggle}>
                <i className="fa fa-bars">
                </i>
            </span>
          <a href="#" className="logo">
            Parte After Parte
          </a>
          <ul class="main-nav" id="js-menu">
            <li>
              <a href="#" className="nav-links">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
