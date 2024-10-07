import { React } from "react";
import logo from "./../../assets/images/gookeys-logo.svg";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2013;
  const yearsOfExperience = currentYear - startYear;
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-3 col-sm-12 lf">
              <h1>Company</h1>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-12 lf">
              <h1>Social</h1>
              <ul>
                <li>
                  <a href="https://www.facebook.com/gookeys">Facebook</a>
                </li>
                <li>
                  <a href="https://www.twitter.com/gookeys">Twitter</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/goo.keys">Instagram</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/gookeys">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-12 lf">
              <h1>Our Services</h1>
              <ul>
                <li>
                  <a href="/ui-ux-design">UI/UX Design</a>
                </li>
                <li>
                  <a href="/web-design-development">Web Design & Development</a>
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
            </div>

            <div className="col-lg-3 col-sm-12 lf">
              <img src={logo} alt="Gookeys Logo" />
              <p>
                Gookeys simplifies and accelerates the process for businesses to
                create exceptional experiences that delight both customers and
                employees.
              </p>
            </div>
          </div>
          <div className="col-lg-12 lf crbtm">
            <p>© {currentYear} Gookeys</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
