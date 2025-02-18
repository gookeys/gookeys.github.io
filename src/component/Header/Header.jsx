import React, { useState } from "react";
import logo from "./../../assets/images/gookeys-logo.svg";
import menuimg from "./../../assets/images/menu.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const isDisabled = true;

  const handleClick = (event) => {
    if (isDisabled) {
      event.preventDefault();
    }
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="gookeys logo" />
            </Link>
          </div>
          <div>
            <button className="mobile-menu" onClick={() => setMenu(!menu)}>
              <img src={menuimg} alt="Menu" />
            </button>
            <ul className={menu ? "open" : ""}>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick} to="/">
                  Services
                </NavLink>
                <ul>
                  <li>
                    <NavLink to="/ui-ux-design">UI/UX Design</NavLink>
                  </li>
                  <li>
                    <NavLink to="/web-design-development">Web Design & Development</NavLink>
                  </li>
                  <li>
                    <NavLink to="/wordpress-services">WordPress</NavLink>
                  </li>
                  <li>
                    <NavLink to="/domain-web-hosting">Domain Hosting Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/seo-digital-marketing">SEO & Digital Marketing</NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
