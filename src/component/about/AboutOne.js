import React from "react";
import FormOne from "../contact/FormOne";

const AboutOne = () => {
  return (
    <section className="section section-padding-equal bg-color-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-us">
              <div className="section-heading heading-left mb-0">
                <span className="subtitle">Om Oss</span>
                <h2 className="title mb--40">
                  Historien Som Binder Oss Sammen
                </h2>
                <p>
                  Fra ydmyke røtter i Gudbrandsdalen startet vi som et
                  dronefirma. Med to dedikerte personer bak roret, skapte vi
                  fantastiske luftopptak og bilder, men vår lidenskap for det
                  digitale vokste, og vi utvidet oss til å bli et fullverdig
                  digitalt byrå som betjener Innlandet.{" "}
                </p>
                <p>
                  Vi er stolte av vår reise, og ser frem til å skape
                  bemerkelsesverdige digitale opplevelser for våre kunder i
                  Innlandet videre. Vårt mål er å være en pålitelig partner som
                  skaper verdi og suksess for alle våre kunder.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-5 col-lg-6 offset-xl-1">
            <div className="contact-form-box">
              <h3 className="title">Kom i kontakt med oss!</h3>
              <FormOne />
            </div>
          </div>
        </div>
      </div>
      <ul className="shape-group-6 list-unstyled">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-4.png"}
            alt="line"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/line-5.png"}
            alt="line"
          />
        </li>
      </ul>
    </section>
  );
};

export default AboutOne;
