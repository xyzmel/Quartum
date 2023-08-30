import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import AboutOne from '../component/about/AboutOne'


const AboutUs = () => {

    return (
        <>
        <SEO title="Om" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title=""
                page="Om"
                />
                <AboutOne />
                
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default AboutUs;