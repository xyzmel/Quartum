import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

const BannerOne = () => {
  return (
    <div className="banner banner-style-1">
      <div className="container">
        <div className="row align-items-end align-items-xl-start">
          <div className="col-lg-6">
            <div className="banner-content">
              <AnimationOnScroll animateIn="fadeInUp" delay={100}>
                <h1 className="title">
                  Design som Fenger, Markedsføring som Treffer
                </h1>
                <span className="subtitle">
                  Fra Kreative Konsepter til Digital Eksponering: Design som
                  Setter Tonen, Markedsføring som Sprer Budskapet, Resultater
                  som Varer
                </span>
                <Link
                  to={process.env.PUBLIC_URL + "/kontakt"}
                  className="axil-btn btn-fill-primary btn-large"
                >
                  Kom i gang
                </Link>
              </AnimationOnScroll>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="banner-thumbnail">
              <AnimationOnScroll animateIn="zoomIn" duration={2} delay={300}>
                <div className="large-thumb">
                  <img
                    src={process.env.PUBLIC_URL + "/images/banner/window.png"}
                    alt="Laptop"
                  />
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="slideInRight"
                duration={1}
                delay={200}
              >
                <div className="large-thumb-2">
                  <img
                    src={
                      process.env.PUBLIC_URL + "/images/banner/laptop-poses.png"
                    }
                    alt="Laptop"
                  />
                </div>
              </AnimationOnScroll>
              <ul className="list-unstyled shape-group">
                <li className="shape shape-1">
                  <AnimationOnScroll
                    animateIn="slideInLeft"
                    duration={1}
                    delay={200}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/banner/chat-group.png"
                      }
                      alt="chat"
                    />
                  </AnimationOnScroll>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-unstyled shape-group-21">
        <li className="shape shape-1">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-39.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-2">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-38.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-3">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-4">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-5">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-14.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-6">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-40.png"}
            alt="Bubble"
          />
        </li>
        <li className="shape shape-7">
          <img
            src={process.env.PUBLIC_URL + "/images/others/bubble-41.png"}
            alt="Bubble"
          />
        </li>
      </ul>
    </div>
  );
};

export default BannerOne;
