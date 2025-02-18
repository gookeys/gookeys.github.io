import React from "react";
import Header from "../component/Header/Header.jsx";
import Footer from "../component/Footer/Footer.jsx";
import WhatsApp from "../component/WhatsApp/WhatsApp.jsx";
import slogo from "../assets/images/gookeys-logo512.png";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Helmet>
          <title>About Us | Gookeys</title>
          <meta name="description" content="Learn about Gookeys, a dedicated web design and development company committed to delivering innovative solutions that enhance your online presence."/>
          <meta name="keywords" content="about Gookeys, web design company, web development company, digital marketing, UI/UX design, company values, mission, team, online solutions"/>
          <meta property="og:title" content="About Us | Gookeys" />
          <meta property="og:description"content="Discover Gookeys, a passionate team focused on providing top-notch web design and development services that drive success for your business."/>
          <meta property="og:image" content={`https://www.gookeys.com${slogo}`}/>
          <meta property="og:url" content="https://gookeys.com/about" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="About Us | Gookeys" />
          <meta name="twitter:description" content="Gookeys is dedicated to creating innovative web solutions. Learn more about our mission, values, and the team behind your success."/>
          <meta name="twitter:image" content={`https://www.gookeys.com${slogo}`}/>
          <link rel="canonical" href="https://gookeys.com/about" />
        </Helmet>

        <div className="banner about">
          <div className="container">
            <h1>About Gookeys</h1>
            <p>
              Gookeys simplifies and accelerates the process for businesses to
              create exceptional experiences that delight both customers and
              employees.
            </p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="higlightcrd mb2p">
                <p>
                  At <strong>Gookeys Technologies</strong>, we are dedicated to
                  helping businesses thrive online with expert web solutions
                  tailored to meet your specific needs. From stunning web design
                  and seamless development to top-tier SEO and digital marketing
                  services, we offer a comprehensive range of solutions that
                  drive growth and elevate your online presence.
                </p>
              </div>
              <div className="col-lg-12 col-sm-12 pagecnt lf">
                <p>
                  Our team excels in creating{" "}
                  <strong>WordPress websites</strong>, providing
                  <strong> domain registration</strong> and{" "}
                  <strong>hosting services</strong>, and delivering{" "}
                  <strong>PSD to HTML</strong> conversions that transform your
                  designs into responsive, functional websites. We ensure that
                  every project we undertake is optimized for performance, user
                  experience (UX), and search engine visibility, helping your
                  business stand out in today’s competitive digital landscape.
                </p>
                <p>
                  As specialists in <strong>user experience (UX) design</strong>
                  , we focus on making every interaction intuitive and
                  efficient, ensuring that your website is both user-friendly
                  and aesthetically appealing. We work closely with tech and
                  design teams to develop customized{" "}
                  <strong>SEO strategies</strong> that improve search engine
                  rankings, boost organic traffic, and enhance overall
                  visibility.
                </p>
                <p>
                  Whether you're looking to build a professional website,
                  enhance your SEO, or need reliable domain and hosting
                  services, our goal is to deliver high-quality, affordable
                  solutions that drive engagement and success for your business.
                  Let us help you create a strong online presence that performs,
                  engages, and grows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WhatsApp />
      <Footer />
    </React.Fragment>
  );
};

export default About;
