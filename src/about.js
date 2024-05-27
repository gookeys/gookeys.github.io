import React from "react";
import aright from "./images/chevron-right.svg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <main>
        <Helmet>
          <title>Gookeys - About</title>
        </Helmet>
        <div className="banner">
          <h1>About Us</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="breadcrum">
              <Link to="/">Home</Link>
              <img src={aright} alt="arrow left" />
              <span>About</span>
            </div>
            <div className="col-lg-12 homcrd">
              <div className="col-lg-12 col-sm-12 pagecnt lf">
                <p>
                  Our vision is to provide website templates and UI kits for web
                  applications and web pages. You can download the templates
                  from LabW3 and use them in your web pages and web
                  applications.
                </p>

                <p>
                  At Gookeys Store, we offer HTML5, CSS3, jQuery, SCSS, LESS,
                  Responsive, and Parallax templates. Our responsive templates
                  are compatible with all devices, including desktops, tablets,
                  and mobiles. There's no need for separate sites for mobile and
                  tablet devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default About;
