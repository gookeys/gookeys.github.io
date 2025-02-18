import React from "react";
import Header from "../component/Header/Header.jsx";
import Footer from "../component/Footer/Footer.jsx";
import WhatsApp from "../component/WhatsApp/WhatsApp.jsx";
import slogo from "../assets/images/gookeys-logo512.png";
import { Helmet } from "react-helmet";

class Privacy extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <Helmet>
            <title>Privacy Policy | Gookeys</title>
            <meta name="description" content="Read Gookeys' Privacy Policy to understand how we collect, use, and protect your personal information while providing web design and development services." />
            <meta name="keywords" content="privacy policy, data protection, personal information, web design, web development, user privacy, information security, Gookeys privacy" />
            <meta property="og:title" content="Privacy Policy | Gookeys" />
            <meta property="og:description" content="Learn about Gookeys' commitment to your privacy and how we handle your personal information while providing our services." />
            <meta property="og:image" content={`https://www.gookeys.com${slogo}`} />
            <meta property="og:url" content="https://gookeys.com/privacy-policy" />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Privacy Policy | Gookeys" />
            <meta name="twitter:description" content="Explore Gookeys' Privacy Policy to find out how we manage your personal information and safeguard your privacy." />
            <meta name="twitter:image" content={`https://www.gookeys.com${slogo}`} /> 
            <link rel="canonical" href="https://gookeys.com/privacy-policy" />
          </Helmet>
          <div className="banner">
            <h1>Privacy Policy</h1>

          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="col-lg-12 col-sm-12 pagecnt lf">
                  <h1>Privacy Policy for Gookeys</h1>
                  <h2>Effective Date 01/Oct/2024</h2>
                  <p>
                    At Gookeys, we respect your privacy and are committed to
                    protecting the information you share with us through our
                    portfolio website. This policy outlines the types of
                    information we collect, how we use it, and the steps we take
                    to ensure its protection.
                  </p>
                  <h2>1. Information We Collect</h2>
                  <p>
                    Since our website primarily serves as a portfolio for our
                    company, we limit the amount of personal data collected.
                    However, we may collect the following information:
                  </p>
                  <ul>
                    <li>
                      <strong>Contact Information:</strong> If you voluntarily
                      fill out a contact form, we may collect your name, email
                      address, and any other information you provide.
                    </li>
                    <li>
                      <strong>Website Usage Data:</strong> We may automatically
                      collect certain technical information, such as your IP
                      address, browser type, referring/exit pages, and the time
                      you visited the site. This helps us understand website
                      traffic and improve user experience.
                    </li>
                    <li>
                      <strong>Cookies:</strong> Our website may use cookies to
                      enhance your experience and collect anonymous data about
                      website usage. You can control cookie settings through
                      your browser.
                    </li>
                  </ul>
                  <h2>2. How We Use Your Information</h2>
                  <p>
                    We use the limited information we collect for the following
                    purposes:
                  </p>
                  <ul>
                    <li>
                      Respond to inquiries or messages submitted via our contact
                      form
                    </li>
                    <li>
                      Improve our website and portfolio content based on usage
                      patterns
                    </li>
                    <li>
                      Ensure the smooth operation of our website and its
                      functionality
                    </li>
                  </ul>
                  <h2>3. Sharing Your Information</h2>
                  <p>
                    As a static portfolio website, we do not sell or share your
                    personal information with third parties, except in the
                    following cases:
                  </p>
                  <ul>
                    <li>
                      <strong>Service Providers:</strong> We may share data with
                      trusted third-party providers (e.g., web hosting,
                      analytics services) to maintain and improve our website.
                      These providers are bound by confidentiality agreements.
                    </li>
                    <li>
                      <strong>Legal Obligations:</strong> We may disclose your
                      information if required by law or to protect our rights or
                      comply with a legal process.
                    </li>
                  </ul>
                  <h2>4. Data Security</h2>
                  <p>
                    We take reasonable measures to protect the information you
                    provide us, but no website or internet transmission is
                    completely secure. While we strive to protect your personal
                    data, we cannot guarantee its absolute security.
                  </p>
                  <h2>5. Data Retention</h2>
                  <p>
                    We retain personal information submitted through our contact
                    form only for as long as necessary to respond to inquiries
                    or as required by law. After this period, we securely
                    dispose of the data.
                  </p>
                  <h2>6. Your Choices</h2>
                  <p>
                    Since our site collects minimal personal information, your
                    rights are primarily related to cookies and analytics. You
                    may:
                  </p>
                  <ul>
                    <li>
                      Control Cookies: Adjust your browser settings to block
                      cookies or notify you when they are being used.
                    </li>
                    <li>
                      Opt-Out: If you wish to have any contact information
                      removed from our records, please contact us at
                      contact@gookeys.com .
                    </li>
                  </ul>
                  <h2>7. Third-Party Links</h2>
                  <p>
                    Our portfolio website may contain links to third-party
                    websites. We are not responsible for the privacy practices
                    of those external sites. Please review their privacy
                    policies before providing any personal information.
                  </p>
                  <h2>8. Children's Privacy</h2>
                  <p>
                    Our website is not intended for children under the age of
                    13, and we do not knowingly collect personal information
                    from children.
                  </p>
                  <h2>9. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this privacy policy from time to time. Any
                    changes will be posted on this page with an updated
                    effective date. Please review this policy periodically to
                    stay informed of any updates.
                  </p>
                  <h2>10. Contact Us</h2>
                  <p>
                    If you have any questions or concerns about this privacy
                    policy or how we handle your information, please contact us:
                  </p>
                  <p>
                    Gookeys
                    <br />
                    contact@gookeys.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <WhatsApp/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Privacy;
