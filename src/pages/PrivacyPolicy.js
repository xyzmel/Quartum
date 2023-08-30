import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';


const PrivacyPolicy = () => {

    return (
        <>
            <SEO title="Personvernregler" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                title="Personvernregler"
                page="Personvernregler"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                <div className="section-title">
                                    <h5 className="title">Denne personvernerklæringen ble publisert den 30. August 2023.</h5>
                                </div>
                                <h4>Personvernregler for Quartum AS</h4>
                                <p>Velkommen til Quartum AS! Vi setter stor pris på din tillit og tar ditt personvern på alvor. Denne personvernregelen beskriver hvordan vi samler inn, bruker og beskytter dine personlige opplysninger i samsvar med norske personvernlover.
                                </p>
                                <h4>Innsamling av Personopplysninger</h4>
                                <p>Vi samler kun inn nødvendige personopplysninger som kreves for å tilby våre tjenester og forbedre din opplevelse på vår nettside. Dette kan inkludere navn, kontaktinformasjon og annen relevant informasjon.  </p>
                                <h4>Bruk av Personopplysninger:</h4>
                                <p>
                                Dine personopplysninger brukes kun til formål som er tydelig kommunisert til deg. Dette kan inkludere å behandle bestillinger, gi kundestøtte, sende relevante oppdateringer og forbedre våre tjenester.
                                </p>
                                <h4>Databeskyttelse</h4>
                                <p className="mb--20">Vi tar alle nødvendige forholdsregler for å sikre at dine personopplysninger er beskyttet mot uautorisert tilgang, endringer eller deling. Vi deler kun dine opplysninger med tredjeparter når det er nødvendig for å levere våre tjenester, og vi krever at de behandler dine data med samme omsorg som oss.</p>
                                
                                <h4>Dine Rettigheter</h4>
                                <p>Du har rett til å få tilgang til dine personopplysninger, korrigere feilaktige opplysninger, trekke tilbake samtykke og be om sletting av data i samsvar med gjeldende lover.</p>
                                <h4>Kontakt Oss</h4>
                                <p>Dersom du har spørsmål angående personvern eller ønsker å utøve dine rettigheter, kan du kontakte oss på [kontaktinformasjon].

Vi oppfordrer deg til å lese vår fullstendige personvernerklæring for mer detaljert informasjon om hvordan vi håndterer personopplysninger.

Denne personvernregelen ble sist oppdatert 30. August 2023.</p>
                               
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

export default PrivacyPolicy;