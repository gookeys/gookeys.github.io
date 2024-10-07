import { React, useState } from "react";
import logo from "./../../assets/images/gookeys-logo.svg";
import menuimg from "./../../assets/images/menu.svg";
import "./Header.scss";
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
            <a href="/">
              <img src={logo} alt="gookeys logo" />
            </a>
          </div>
          <div>
            <button className="mobile-menu" onClick={() => setMenu(!menu)}>
              <img src={menuimg} />
            </button>
            <ul className={menu === true ? "open" : ""}>
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
                    <a href="/ui-ux-design">UI/UX Design</a>
                  </li>
                  <li>
                    <a href="/web-design-development">
                      Web Design & Development
                    </a>
                  </li>
                  <li>
                    <a href="/wordpress-services">Wordpress</a>
                  </li>
                  <li>
                    <a href="/domain-web-hosting">Domain Hosting Services</a>
                  </li>
                  <li>
                    <a href="/seo-digital-marketing">SEO & Digital Marketing</a>
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
