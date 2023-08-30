import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const AboutTwo = () => {
    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Om oss</span>
                                <h3 className="title">Hvorfor velge oss?</h3>
                                <p>Vi forstår at én størrelse ikke passer alle. Våre skreddersydde tilnærminger sikrer at vi møter dine unike behov og mål.</p>
                            </div>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaCompress /> Strategi</Accordion.Header>
                                    <Accordion.Body>
                                    Vi lager skreddersydde digitale strategier som gir deg det ekstra sparket du trenger for å nå dine mål. Vår kreative gnist kombinert med teknisk know-how sørger for at du alltid er i forkant.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaCode /> Utvikling</Accordion.Header>
                                    <Accordion.Body>
                                    Vårt kreative team utfolder seg med design og kampanjeidéer som treffer akkurat der hjertet ditt banker. Derfra går vårt team i gang med å konvertere konseptene til digitale virkeligheter som fungerer sømløst på alle plattformer.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaGlobe /> Resultater</Accordion.Header>
                                    <Accordion.Body>
                                    Resultatet? En opplevelse som ikke bare fanger oppmerksomheten, men som også er enkel å bruke. Når vi ser strategien og designet vårt sette sitt preg på den digitale verden, vet vi at vi er på rett spor. Målet vårt er å skape ikke bare kampanjer, men også langvarige digitale forvandlinger som gir varige positive resultater.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Bli kontaktet!</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutTwo;