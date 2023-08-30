import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const TermsOfUse = () => {

    return (
        <>
            <SEO title="Bruksvilkår" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Bruksvilkår"
                page="Bruksvilkår"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <h4>Bruksvilkår for Quartum AS</h4>
                                <p>Velkommen til Quartum AS! Ved å bruke vår nettside samtykker du til å følge disse bruksvilkårene. Vennligst les nøye gjennom vilkårene før du fortsetter å bruke nettsiden.</p>
                                <h4>Bruk av Nettsiden</h4>
                                <p>Vår nettside og innholdet på den er ment for informasjonsformål. Du samtykker til å bruke nettsiden på en måte som er i samsvar med gjeldende lover og forskrifter.
                                </p>
                                <h4>Immatrielle Rettigheter</h4>
                                <p>Alt innhold på nettsiden, inkludert tekst, bilder, grafikk, videoer og annet materiale, er beskyttet av opphavsrett og andre immaterielle rettigheter tilhørende Quartum AS eller tredjeparter. Du kan ikke kopiere, distribuere eller bruke dette materialet uten skriftlig tillatelse.</p>
                                <h4>Ansvarsfraskrivelse</h4>
                                <p>Vi streber etter å gi nøyaktig og oppdatert informasjon, men vi gir ingen garantier for riktigheten, påliteligheten eller fullstendigheten av innholdet på nettsiden. Vi er ikke ansvarlige for eventuelle feil eller mangler i informasjonen.</p>
                                <h4>Lenker til Tredjepartsnettsteder</h4>
                                <p>Nettsiden kan inneholde lenker til eksterne nettsteder som ikke kontrolleres av Quartum AS. Vi er ikke ansvarlige for innholdet på slike nettsteder og påtar oss ikke noe ansvar for eventuelle skader eller tap som følge av bruken av disse nettstedene.</p>
                                <h4>Endringer i Vilkårene</h4>
                                <p>Vi forbeholder oss retten til å endre disse bruksvilkårene når som helst. Eventuelle endringer vil tre i kraft umiddelbart etter publisering på nettsiden. Ved å fortsette å bruke nettsiden etter slike endringer, samtykker du til de reviderte vilkårene.</p>
                                <h4>Kontakt Oss</h4>
                                <p>Dersom du har spørsmål om bruksvilkårene, vennligst kontakt oss på post@kvartum.no.

Disse bruksvilkårene ble sist oppdatert 30. August 2023.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <CtaLayoutOne />
            <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default TermsOfUse;