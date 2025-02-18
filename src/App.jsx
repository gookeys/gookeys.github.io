import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Privacy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/TermsofService.jsx";
import DomainHosting from "./pages/services/DomainHostingServices.jsx";
import SEODigitalMarketing from "./pages/services/SEODigitalMarketing.jsx";
import UIUXDesign from "./pages/services/UIUxDesign.jsx";
import WebDesignDevelopment from "./pages/services/WebDesignDevelopment.jsx";
import Wordpress from "./pages/services/Wordpress.jsx";
import "./App.scss";
import "./bootstrap-grid.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/domain-web-hosting" element={<DomainHosting />} />
        <Route path="/seo-digital-marketing" element={<SEODigitalMarketing />} />
        <Route path="/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/web-design-development" element={<WebDesignDevelopment />} />
        <Route path="/wordpress-services" element={<Wordpress />} />
      </Routes>
    </Router>
  );
}

export default App;
