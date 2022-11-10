import React from "react";
import bnr from "./images/bnr.png";
import temp from "./images/template.png";
import clr from "./images/color.png";
import nws from "./images/news.png";
import imgs from "./images/image.png";
import cde from "./images/code.png";
import vido from "./images/video.png";
import edt from "./images/edit.png";
import snd from "./images/send.png";
import Gkysgg from "./images/Gkys-Gg.jpg";
import GkysGpx from "./images/Gkys-Gpx.jpg";
import GkysIcon from "./images/Gkys-Icons.jpg";
import GkysYtbe from "./images/GeekGokul.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    const mystyle = {
      padding: "10px",
      fontSize: "200px",
    };

    return (
      <main>
        <Helmet>
          <title>Gookeys - Template| Icon | Tech News & Videos</title>
        </Helmet>
        <div class="hmbanner">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 lf">
                <h1>
                  Professional Themes, Website Templates, & Icons for your
                  project.
                </h1>
                <p>
                  Discover thousands of icons, & templates made by world-class
                  developers.
                </p>
                <div class="col-lg-12 lf txct mb4p mt1p">
                  <Link to="/Store" className="fill">
                    Shop Now
                  </Link>
                  <a href="#movetop">Explore Now</a>
                </div>
              </div>
              <div class="col-lg-12 lf bgimgcont">
                <img src={bnr} />
                <span class="imgt2">Tech Videos</span>
                <span class="imgt1">Icon</span>
                <span class="imgt3">Templates</span>
                <span class="imgt4">Tech News</span>
                <div class="imgcnt">
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
        <div class="hmwhwedo" id="movetop">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 lf">
                <h1 class="hmcrdtit">What we do</h1>
              </div>
              <div class="col-lg-12 lf">
                <div class="col-lg-3 col-sm-12 lf pt2em">
                  <div class="hmcrd org">
                    <h2>Design</h2>
                    <p>
                      We take your customer what they want we get requirement
                      and what they need and get their ideas and we make moke
                      layout wireframe and get the approval from the customer
                      and go for the code.
                    </p>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12 lf pt2em">
                  <div class="hmcrd blu mtp">
                    <h2>Code</h2>
                    <p>
                      After the design layout, we go for code implementation.
                      First, we create the UI Design for the entire project and
                      test the UI and UX of the project after that we go for the
                      functional implementation.
                    </p>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12 lf pt2em">
                  <div class="hmcrd ylw">
                    <h2>Build</h2>
                    <p>
                      After the code and functionality work completed, we
                      combine all the code into the complete build. And test the
                      building code and functionality working properly in the
                      stage environment.
                    </p>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-12 lf pt2em">
                  <div class="hmcrd grn mtp">
                    <h2>Launch</h2>
                    <p>
                      We carefully inspect the site, including extensive mobile
                      and responsive testing and ensure a smooth transition
                      post-launch..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="hmserv">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 lf">
                <h1 class="hmcrdtit">Services</h1>
              </div>
              <div class="col-lg-12 lf">
                <div class="col-lg-4 col-sm-12 lf">
                  <div class="serlogo">
                    <img src={Gkysgg} />
                  </div>
                  <h2>GeekGokul</h2>
                  <p>
                    GeekGokul.com is a Tech Blog. We write posts related to Tech
                    News and Updates about Mobile, Internet, Gadgets, New
                    Technology & E-Governance in English.
                  </p>
                  <div class="col-lg-12 lf txct">
                    <a href="https://www.geekgokul.com" class="gbtn mt15p mb20p">
                      Read Now
                    </a>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-12 lf">
                  <div class="serlogo">
                    <img src={GkysGpx} />
                  </div>
                  <h2>GeekPX</h2>
                  <p>
                    Free Web Site Widget, Tips, Tricks, and Tutorial of Design
                    Softwares and Coding. Geek PX Expert on Html, CSS, SCSS,
                    JavaScript, jQuery, React, and Vue JS.
                  </p>
                  <div class="col-lg-12 lf txct">
                    <a href="https://px.geekgokul.com" class="gbtn mt15p mb20p">
                      Read Now
                    </a>
                  </div>
                </div>

                <div class="col-lg-4 col-sm-12 lf">
                  <div class="serlogo">
                    <img src={GkysIcon} />
                  </div>
                  <h2>GeekIcons</h2>
                  <p>
                    We Help the Designers to make their design better with our
                    icons. Each icon has the 7 different formats PNG, SVG, ICO,
                    ICNS, EPS, PNG Base64, and SVG Base64.
                  </p>
                  <div class="col-lg-12 lf txct">
                    <a href="https://geekicons.blogspot.in" class="gbtn mt15p mb20p">
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="hmttcom">
          <div class="container">
            <div class="row">
              <div class="col-lg-12 lf">
                <h1 class="hmcrdtit">Watch our videos</h1>
              </div>
              <div class="col-lg-12 col-sm-12 lf">
                <div class="col-lg-6 col-sm-12 lf">
                  <img src={GkysYtbe}/>
                </div>
                <div class="col-lg-6 col-sm-12 lf">
                  <h2 class="mt15p">GeekGokul</h2>
                  <p class="mt2p mt3p">Geek Gokul is a YouTube Channel that creating a video about Tech News and Updates about Mobile, Internet, Gadgets, New Technology & E-Governance in the Indian language Tamil.</p>
                    <a href="https://www.youtube.com/geekgokul" class="gbtn mt5p">
                      Watch Now
                    </a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;