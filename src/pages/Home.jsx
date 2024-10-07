import React from "react";
import Header from "../component/Header/Header.jsx";
import Footer from "../component/Footer/Footer.jsx";
import bnr from "../assets/images//bnr.png";
import temp from "../assets/images//template.png";
import clr from "../assets/images//color.png";
import nws from "../assets/images//news.png";
import imgs from "../assets/images//image.png";
import cde from "../assets/images//code.png";
import vido from "../assets/images//video.png";
import edt from "../assets/images//edit.png";
import snd from "../assets/images//send.png";
import ui from "../assets/images/design.webp";
import web from "../assets/images/web-icon.webp";
import marketing from "../assets/images/marketing.webp";
import wordpress from "../assets/images/wordpress.webp";
import html5 from "../assets/images/HTML5.webp";
import server from "../assets/images/server-icon.webp";
import worktech from "../assets/images/working-tech.webp";
import slogo from "../assets/images/logo512.png";

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Gookeys - Web Designing and Development Company</title>
        <meta
          name="description"
          content="Gookeys offers custom web design and development, including WordPress sites, UI/UX design, SEO, digital marketing, and secure domain & hosting services. Build your online presence with our expert solutions that drive engagement and success."
        />
        <meta
          name="keywords"
          content="web design, web development, WordPress development, SEO, digital marketing, UI/UX design, PSD to HTML conversion, domain registration, hosting services, responsive websites, custom web design, online presence, website optimization, performance optimization, website security"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Gookeys - Web Designing and Development Company"
        />
        <meta
          property="og:description"
          content="Gookeys offers custom web design, WordPress development, UI/UX design, SEO, and secure domain & hosting services to boost your online presence."
        />
        <meta
          property="og:image"
          content={slogo}
        />
        <meta property="og:url" content="https://gookeys.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Gookeys - Web Designing and Development Company"
        />
        <meta
          name="twitter:description"
          content="We offer web design, WordPress development, SEO, and domain & hosting services to build your online presence."
        />
        <meta
          name="twitter:image"
          content={slogo}
        />

        <link rel="canonical" href="https://gookeys.com" />
        <meta charset="UTF-8" />
      </Helmet>
      <Header />
      <main>
        <div className="hmbanner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 lf">
                <h1>
                  Accelerate Your Business Growth with Gookeys' Innovative
                  Solutions.
                </h1>
                <p>
                  We design and develop custom solutions that drive seamless
                  business growth and expansion.
                </p>
                <div className="col-lg-12 lf txct mb4p mt1p">
                  <a href="#services" className="fill">
                    Services
                  </a>
                  <Link to="/contact">Contact Us</Link>
                </div>
              </div>
              <div className="col-lg-12 lf bgimgcont">
                <img src={bnr} />
                <span className="imgt2">Ecommerce</span>
                <span className="imgt1">Icon</span>
                <span className="imgt3">Templates</span>
                <span className="imgt4">Marketing</span>
                <div className="imgcnt">
                  <img src={temp} />
                  <img src={clr} />
                  <img src={nws} />
                  <img src={imgs} />
                  <img src={cde} />
                  <img src={snd} />
                  <img src={edt} />
                  <img src={vido} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hmwhwedo">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 lf">
                <h1 className="hmcrdtit">How do we works ?</h1>
              </div>
              <div className="col-lg-12 lf">
                <div className="col-lg-3 col-sm-12 lf pt2em">
                  <div className="hmcrd org">
                    <h2>Design</h2>
                    <p>
                      We gather requirements from your customers to understand
                      their needs and ideas. We then create mock layouts and
                      wireframes, obtain approval from the customer, and proceed
                      with the coding.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 lf pt2em">
                  <div className="hmcrd blu mtp">
                    <h2>Code</h2>
                    <p>
                      After finalizing the design layout, we proceed with code
                      implementation. First, we create the UI design for the
                      entire project and test the UI and UX. After that, we move
                      on to functional implementation.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 lf pt2em">
                  <div className="hmcrd ylw">
                    <h2>Build</h2>
                    <p>
                      After the code and functionality work is completed, we
                      combine all the code into the final build. We then test
                      the build and ensure the code and functionality are
                      working properly in the staging environment.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12 lf pt2em">
                  <div className="hmcrd grn mtp">
                    <h2>Launch</h2>
                    <p>
                      We carefully inspect the site, including extensive mobile
                      and responsive testing, to ensure a smooth transition
                      post-launch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hmserv" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 lf">
                <h1 className="hmcrdtit">Our Services</h1>
              </div>
              <div className="col-lg-12 lf">
                <div className="col-lg-4 col-sm-12 lf">
                  <div className="serlogo">
                    <img src={ui} />
                  </div>
                  <h2>UX/UI Design</h2>
                  <p>
                    UX design ensures intuitive, efficient interactions by
                    focusing on usability and user satisfaction. The UI's visual
                    design must be both functional and aesthetically appealing.
                  </p>
                  <div className="col-lg-12 lf plr3em">
                    <a href="/ui-ux-design" className="readbtn">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 lf">
                  <div className="serlogo">
                    <img src={web} />
                  </div>
                  <h2>Web Design & Development</h2>
                  <p>
                    Build a strong online presence with a professional,
                    well-designed website. Our expert web design and development
                    services ensure optimal performance and user experience.
                  </p>
                  <div className="col-lg-12 lf plr3em">
                    <a href="/web-design-development" className="readbtn">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 lf">
                  <div className="serlogo">
                    <img src={html5} />
                  </div>
                  <h2>PSD to HTML Conversion</h2>
                  <p>
                    Transform your design into a responsive website with our
                    expert PSD to HTML conversion services, delivering clean,
                    optimized code for all devices.
                  </p>
                  <div className="col-lg-12 lf plr3em">
                    <a href="/web-design-development" className="readbtn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 lf mb3p">
                <div className="col-lg-4 col-sm-12 lf mt4p">
                  <div className="serlogo">
                    <img src={server} />
                  </div>
                  <h2>Domain and Hosting</h2>
                  <p>
                    Looking for secure domain registration and hosting? Spruko
                    offers affordable, high-quality solutions to establish a
                    strong online presence with top performance.
                  </p>
                  <div className="col-lg-12 lf plr3em">
                    <a href="/domain-web-hosting" className="readbtn">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 lf mt4p">
                  <div className="serlogo">
                    <img src={marketing} />
                  </div>
                  <h2>SEO & Digital Marketing</h2>
                  <p>
                    Our SEO experts collaborate with tech and design teams to
                    deliver tailored strategies that optimize your website,
                    improve rankings, and drive organic traffic.
                  </p>
                  <div className="col-lg-12 lf plr3em">
                    <a href="/seo-digital-marketing" className="readbtn">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="col-lg-4 col-sm-12 lf mt4p">
                  <div className="serlogo">
                    <img src={wordpress} />
                  </div>
                  <h2>WordPress</h2>
                  <p>
                    We specialize in WordPress web design and development with
                    SEO integration to boost your website’s visibility and drive
                    business growth.
                  </p>
                  <div className="col-lg-12 lf plr3em">
                    <a href="/wordpress-services" className="readbtn">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hmttcom">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 lf">
                <h2>We Working on this Platforms</h2>
                <p>
                  We work with all modern technologies and frameworks to meet
                  the diverse needs of our clients.
                </p>
              </div>
              <div className="col-lg-12 lf">
                <img src={worktech} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
