import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import SEO from "../common/SEO";
import AboutOne from "../component/about/AboutOne";
import BannerOne from "../component/banner/BannerOne";

import CtaLayoutOne from "../component/cta/CtaLayoutOne";

import ServicePropOne from "../component/service/ServicePropOne";

import SectionTitle from "../elements/section-title/SectionTitle";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";

const DigitalAgency = () => {
  return (
    <>
      <SEO title="Digitalt Byrå" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BannerOne />
        <div className="section section-padding-2 bg-color-dark">
          <div className="container">
            <SectionTitle
              subtitle="Hva vi kan gjøre for deg"
              title="Tjenester vi kan hjelpe deg med"
              description="Trenger du noen til å kaste litt digital magi på nettsiden din? Vi er høyre hånden din for alt som har med smidig design og smart markedsføring å gjøre."
              textAlignment="heading-light-left"
              textColor=""
            />
            <div className="row">
              <ServicePropOne
                colSize="col-xl-4 col-md-6"
                serviceStyle=""
                itemShow="6"
              />
            </div>
          </div>
          <ul className="list-unstyled shape-group-10">
            <li className="shape shape-1">
              <img
                src={process.env.PUBLIC_URL + "/images/others/line-9.png"}
                alt="Circle"
              />
            </li>
            <li className="shape shape-2">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-42.png"}
                alt="Circle"
              />
            </li>
            <li className="shape shape-3">
              <img
                src={process.env.PUBLIC_URL + "/images/others/bubble-43.png"}
                alt="Circle"
              />
            </li>
          </ul>
        </div>
        <AboutOne />
        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default DigitalAgency;
