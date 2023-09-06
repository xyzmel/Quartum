import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import { inject } from "@vercel/analytics";

// Home Pages Import
import DigitalAgency from "./pages/DigitalAgency";

// Blog Import


// Service
import ServiceOne from "./pages/ServiceOne";
import ServiceDetails from "./pages/ServiceDetails";

// Project


// Pages
import AboutUs from "./pages/AboutUs";

import Contact from "./pages/Contact";
import ErrorPage from "./pages/404";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

// Css Import
import "./assets/scss/app.scss";

inject();

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            element={<DigitalAgency />}
          />

         

          
         
          
        

          {/* Service */}
          <Route
            path={process.env.PUBLIC_URL + "/tjenester"}
            element={<ServiceOne />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/tjeneste-detaljer/:slug"}
            element={<ServiceDetails />}
          />

        

          {/* Pages  */}
          <Route path={process.env.PUBLIC_URL + "/om"} element={<AboutUs />} />
          
    

         
         
          
          <Route
            path={process.env.PUBLIC_URL + "/kontakt"}
            element={<Contact />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/portefolje"}
            element={<ErrorPage />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/personvernregler"}
            element={<PrivacyPolicy />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/bruksvilkaar"}
            element={<TermsOfUse />}
          />
        </Routes>
      </ScrollToTop>
    </Router>
  );
};

export default App;
