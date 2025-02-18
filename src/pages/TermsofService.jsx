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
              <title>Terms of Service | Gookeys</title>
              <meta name="description" content="Review Gookeys' Terms of Service to understand the rules and guidelines for using our web design and development services." />
              <meta name="keywords" content="terms of service, user agreement, service terms, web design, web development, Gookeys terms, user policy, legal agreement" />
              <meta property="og:title" content="Terms of Service | Gookeys" />
              <meta property="og:description" content="Explore Gookeys' Terms of Service to learn about the rules and conditions governing the use of our services." />
              <meta property="og:image" content={`https://www.gookeys.com/${slogo}`} />
              <meta property="og:url" content="https://gookeys.com/terms-of-service" />
              <meta property="og:type" content="website" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:title" content="Terms of Service | Gookeys" />
              <meta name="twitter:description" content="Understand the terms that apply to your use of Gookeys' services by reviewing our Terms of Service." />
              <meta name="twitter:image" content={`https://www.gookeys.com${slogo}`} /> 
              <link rel="canonical" href="https://gookeys.com/terms-of-service" />
          </Helmet>
          <div className="banner">
            <h1>Terms of Service</h1>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 ">
                <div className="col-lg-12 col-sm-12 pagecnt lf">
                  <h1>Terms of Service</h1>
                  <h2>Effective Date 01/Oct/2024</h2>
                  <p>
                    Welcome to Gookeys! By accessing or using our website (the
                    “Site”), you agree to comply with and be bound by the
                    following Terms of Service. Please read these terms
                    carefully before using our website.
                  </p>
                  <h2>1. Acceptance of Terms</h2>
                  <p>
                    By using our Site, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Service.
                    If you do not agree with any part of these terms, please do
                    not use our Site.
                  </p>
                  <h2>Use of Website</h2>
                  <p>
                    You may use our Site for personal, non-commercial purposes
                    only. You agree not to:
                  </p>
                  <ul>
                    <li>
                      Use the Site for any unlawful purpose or in violation of
                      any local, state, national, or international law
                    </li>
                    <li>
                      Interfere with or disrupt the operation of the Site or the
                      servers or networks connected to the Site
                    </li>
                    <li>
                      Reproduce, duplicate, copy, sell, trade, or resell any
                      content from the Site without express written permission
                      from Gookeys
                    </li>
                    <li>
                      Attempt to gain unauthorized access to any portion of the
                      Site or its systems
                    </li>
                  </ul>
                  <h2>3. Intellectual Property</h2>
                  <p>
                    All content on the Site, including but not limited to text,
                    images, logos, graphics, and design, is the intellectual
                    property of Gookeys or its licensors and is protected by
                    applicable intellectual property laws. You may not
                    reproduce, distribute, modify, or create derivative works
                    from any content on the Site without our express written
                    consent.
                  </p>

                  <h2>4. Third-Party Links</h2>
                  <p>
                    Our Site may contain links to third-party websites for your
                    convenience. We do not control or endorse these third-party
                    sites and are not responsible for their content, privacy
                    policies, or practices. Accessing third-party websites is at
                    your own risk, and we encourage you to review their terms
                    and privacy policies.
                  </p>

                  <h2>5. Disclaimer of Warranties</h2>
                  <p>
                    Our Site and its content are provided on an "as-is" and
                    "as-available" basis, without warranties of any kind, either
                    express or implied. Gookeys makes no representations or
                    warranties regarding the accuracy, reliability, or
                    completeness of any content on the Site.
                  </p>
                  <p>
                    We do not guarantee that the Site will be available at all
                    times or that it will be free of errors, defects, or
                    security vulnerabilities.
                  </p>
                  <h2>6. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, Gookeys shall not be
                    liable for any direct, indirect, incidental, consequential,
                    or punitive damages, including but not limited to damages
                    for lost profits, loss of data, or business interruption,
                    arising out of or in connection with your use of or
                    inability to use the Site.
                  </p>
                  <h2>7. Changes to Terms</h2>
                  <p>
                    We reserve the right to update or modify these Terms of
                    Service at any time. Any changes will be effective
                    immediately upon posting to the Site. Your continued use of
                    the Site after any modifications to the terms indicates your
                    acceptance of the updated terms. We encourage you to review
                    these terms periodically.
                  </p>

                  <h2>8. Governing Law</h2>
                  <p>
                    These Terms of Service are governed by and construed in
                    accordance with the laws of India/Tamil Nadu.
                  </p>
                  <h2>9. Termination</h2>
                  <p>
                    We reserve the right to terminate or restrict your access to
                    the Site at any time, without notice or liability, for any
                    reason, including but not limited to a violation of these
                    Terms of Service.
                  </p>

                  <h2>10. Contact Us</h2>
                  <p>
                    If you have any questions or concerns regarding these Terms
                    of Service, please contact us at:
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
