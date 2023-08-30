import React, { useEffect } from "react";
import Logo from "../../elements/logo/Logo";
import Nav from "../../common/header/Nav";
import StickyHeader from "./StickyHeader";
import SwitcherHeader from "../../elements/switcher/SwitcherHeader";
import MobileMenu from "./MobileMenu";

const HeaderOne = () => {
  const sticky = StickyHeader(100);

  // Define the MobileMenuHandler function here
  const MobileMenuHandler = () => {
    const mobileMenuPopup = document.querySelector(".mobilemenu-popup");
    const body = document.querySelector("body");

    if (mobileMenuPopup && body) {
      mobileMenuPopup.classList.toggle("show");
      body.classList.toggle("mobilemenu-show");
    }
  };

  useEffect(() => {
    const menuItemClickListener = function () {
      const submenu = this.parentElement.querySelector(".axil-submenu");
      if (submenu) {
        submenu.classList.toggle("active");
      }
      this.classList.toggle("open");
    };

    const elements = document.querySelectorAll(
      ".mobilemenu-popup .menu-item-has-children > a"
    );

    for (let i = 0; i < elements.length; i++) {
      elements[i].addEventListener("click", menuItemClickListener);
    }

    const mobileMenuButton = document.querySelector(".mobile-menu-btn button");
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener("click", MobileMenuHandler);
    }

    // Clean up the event listeners when the component unmounts
    return () => {
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener("click", MobileMenuHandler);
      }
      for (let i = 0; i < elements.length; i++) {
        elements[i].removeEventListener("click", menuItemClickListener);
      }
    };
  }, []);

  return (
    <>
      <header className={`header axil-header header-style-1 ${sticky ? "axil-sticky" : ""}`}>
        <div className="axil-mainmenu">
          <div className="container">
            <div className="header-navbar">
              <div className="header-logo">
                <Logo
                  limage="/images/logo.png"
                  dimage="/images/logo1.png"
                  simage="/images/logo.png"
                />
              </div>
              <div className="header-main-nav">
                <Nav />
              </div>
              <div className="header-action">
                <ul className="list-unstyled">
                  <li className="mobile-menu-btn sidemenu-btn d-lg-none d-block">
                    <button className="btn-wrap">
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </li>
                  <li className="my_switcher d-block d-lg-none">
                    <SwitcherHeader />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu MobileHandler={MobileMenuHandler} />
    </>
  );
};

export default HeaderOne;
