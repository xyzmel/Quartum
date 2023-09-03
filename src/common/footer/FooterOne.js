import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaLinkedin,
  FaInstagram,
  FaVimeoV,
  FaDribbble,
  FaBehance,
  FaEnvelopeOpen,
} from "react-icons/fa";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from "../../utils";

const getServiceData = ServiceData;

const FooterOne = ({ parentClass }) => {
  return (
    <footer className={`footer-area ${parentClass}`}>
      <div className="container">
        <div className="footer-top">
          <div className="footer-social-link">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100090084915977"
                  target="_blank"
                >
                  <FaFacebookF />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/quartum-as"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/kvartum.no/"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-main">
          <div className="row">
            <div className="col-xl-6 col-lg-5">
              <div className="footer-widget border-end">
                <div className="footer-newsletter">
                  <h2 className="title">Kom i kontakt!</h2>
                  <p>
                    Hold deg oppdatert med våre nyeste oppdateringer ved å
                    abonnere.
                  </p>
                  <form>
                    <div className="input-group">
                      <span className="mail-icon">
                        <FaEnvelopeOpen />{" "}
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-post"
                      />
                      <button className="subscribe-btn" type="submit">
                        Abonner
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <div className="row">
                <div className="col-sm-6">
                  <div className="footer-widget">
                    <h6 className="widget-title">Tjenester</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        {getServiceData.slice(0, 6).map((data, index) => (
                          <li key={index}>
                            <Link
                              to={
                                process.env.PUBLIC_URL +
                                `/tjeneste-detaljer/${slugify(data.title)}`
                              }
                            >
                              {data.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-3">
                  <div className="footer-widget">
                    <h6 className="widget-title">Kundestøtte</h6>
                    <div className="footer-menu-link">
                      <ul className="list-unstyled">
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/kontakt"}>
                            Kontakt
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link
                            to={process.env.PUBLIC_URL + "/personvernregler"}
                          >
                            Personvernregler
                          </Link>
                        </li>
                        <li>
                          <Link to={process.env.PUBLIC_URL + "/bruksvilkaar"}>
                            Bruksvilkår
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-copyright">
                <span className="copyright-text">
                  © {new Date().getFullYear()}. Alle rettigheter reservert av{" "}
                  <a>Quartum AS</a>. Org.nr: 929 140 664
                </span>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-bottom-link">
                <ul className="list-unstyled">
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/personvernregler"}>
                      Personvernregler
                    </Link>
                  </li>
                  <li>
                    <Link to={process.env.PUBLIC_URL + "/bruksvilkaar"}>
                      Bruksvilkår
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
