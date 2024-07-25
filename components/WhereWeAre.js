// WhereWeAre.js
import React from 'react';

function WhereWeAre() {
    return (
        <section id="where-we-are" className="section-gap bg-gray">
            <div className="container">
                <div className="row justify-content-md-between align-items-center">
                    <div className="col-md-6">
                        <div className="blurb blurb-border bg-gray border-0 d-flex pl-0">
                            <i className="vl-box pr-4 text-primary mt-3 mb-0"></i>
                            <div>
                                <h2 className="mb-md-3">Where We Are</h2>
                                <p className="lead text-muted">
                                    <span className="highlight">GOTSKILL?</span> is available throughout Ontario - from
                                    Windsor to Niagara Region to Ottawa and Cornwall, throughout the Greater Toronto
                                    Area and as far north as Thunder Bay and Pickle Lake.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="position-relative">
                            <img src="/assets/img/Gotskill Locations.png" alt="GOTSKILL Locations" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
{
    /* <section id="where-we-are" className="where-we-are">
            <h2>Where We Are</h2>
            <img src="/assets/img/Gotskill Locations.png" alt="GOTSKILL Locations" className="image-transition" />
            <p>
                <span className="highlight">GOTSKILL?</span> is available throughout Ontario – from Windsor to Niagara
                Region to Ottawa and Cornwall, throughout the Greater Toronto Area and as far north as Thunder Bay and
                Pickle Lake.
            </p>
        </section> */
}

export default WhereWeAre;
