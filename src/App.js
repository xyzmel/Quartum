import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Home Pages Import
import DigitalAgency from "./pages/DigitalAgency";

// Blog Import
import BlogGridView from "./pages/BlogGrid";
import BlogCategory from "./pages/Category";
import BlogArchive from "./pages/Archive";
import BlogDetails from "./pages/BlogDetails";

// Service
import ServiceOne from "./pages/ServiceOne";
import ServiceDetails from "./pages/ServiceDetails";

// Project
import ProjectGridOne from "./pages/ProjectGridOne";
import ProjectGridTwo from "./pages/ProjectGridTwo";
import ProjectGridThree from "./pages/ProjectGridThree";
import ProjectGridFive from "./pages/ProjectGridFive";
import ProjectGridFour from "./pages/ProjectGridFour";
import ProjectDetails from "./pages/ProjectDetails";

// Pages
import AboutUs from "./pages/AboutUs";
import OurOffice from "./pages/OurOffice";
import OurClients from "./pages/OurClients";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Testimonials from "./pages/Testimonials";
import PricingTable from "./pages/PricingTable";
import Typography from "./pages/Typography";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/404";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";

// Css Import
import "./assets/scss/app.scss";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            path={process.env.PUBLIC_URL + "/"}
            element={<DigitalAgency />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/digital-agency"}
            element={<DigitalAgency />}
          />

          {/* Blogs */}
          <Route
            path={process.env.PUBLIC_URL + "/blog-grid/"}
            element={<BlogGridView />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/category/:slug"}
            element={<BlogCategory />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/archive/:slug"}
            element={<BlogArchive />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/blog-details/:id"}
            element={<BlogDetails />}
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

          {/* Project  */}
          <Route
            path={process.env.PUBLIC_URL + "/project-grid-one"}
            element={<ProjectGridOne />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-grid-two"}
            element={<ProjectGridTwo />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-grid-three"}
            element={<ProjectGridThree />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-width-one"}
            element={<ProjectGridFour />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-width-two"}
            element={<ProjectGridFive />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/project-details/:slug"}
            element={<ProjectDetails />}
          />

          {/* Pages  */}
          <Route
            path={process.env.PUBLIC_URL + "/om"}
            element={<AboutUs />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/our-office"}
            element={<OurOffice />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/our-clients"}
            element={<OurClients />}
          />
          <Route path={process.env.PUBLIC_URL + "/team"} element={<Team />} />
          <Route
            path={process.env.PUBLIC_URL + "/team-details/:slug"}
            element={<TeamDetails />}
          />

          <Route
            path={process.env.PUBLIC_URL + "/testimonials"}
            element={<Testimonials />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/pricing-table"}
            element={<PricingTable />}
          />
          <Route
            path={process.env.PUBLIC_URL + "/typography"}
            element={<Typography />}
          />
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
