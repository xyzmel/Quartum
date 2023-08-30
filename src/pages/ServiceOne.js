import React from "react";
import FooterOne from "../common/footer/FooterOne";
import HeaderOne from "../common/header/HeaderOne";
import BcrumbBannerOne from "../elements/breadcrumb/BcrumbBannerOne";
import ColorSwitcher from "../elements/switcher/ColorSwitcher";
import SEO from "../common/SEO";
import CtaLayoutOne from "../component/cta/CtaLayoutOne";
import SectionTitle from "../elements/section-title/SectionTitle";
import ServiceProp from "../component/service/ServiceProp";
import ServiceData from "../data/service/ServiceMain.json";
import { slugify } from "../utils";

const allData = ServiceData;

const ServiceOne = () => {
  const designData = allData.filter(
    (data) => slugify(data.cate ? data.cate : "") === "design"
  );

  return (
    <>
      <SEO title="Tjenester" />
      <ColorSwitcher />
      <main className="main-wrapper">
        <HeaderOne />
        <BcrumbBannerOne
          title="De beste løsningene for din bedrift"
          paragraph="Digitale utfordringer er vårt spill. Vi bygger broen mellom kreativitet og teknologi.
                "
          styleClass=""
          mainThumb="/images/banner/banner-thumb-4.png"
        />
        <div className="service-scroll-navigation-area">
          <div className="section section-padding" id="section1">
            <div className="container">
              <SectionTitle
              title="Vi tilbyr"
                subtitle="Tjenester"
                description=""
                textAlignment="heading-left"
                textColor=""
              />
              <div className="row">
                <ServiceProp
                  colSize="col-lg-4 col-md-6"
                  serviceStyle="service-style-2"
                  serviceData={designData}
                />
              </div>
            </div>
          </div>
        </div>
        <CtaLayoutOne />
        <FooterOne parentClass="" />
      </main>
    </>
  );
};

export default ServiceOne;
