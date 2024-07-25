// WhereWeAre.js
import React from 'react';
import locationsImage from '../public/assets/img/Gotskill Locations.png';

function WhereWeAre() {
    return (
        <section id="where-we-are" className="where-we-are fade-in">
            <h2>Where We Are</h2>
            <img src={locationsImage} alt="GOTSKILL Locations" className="image-transition" />
            <p>
                <span className="highlight">GOTSKILL?</span> is available throughout Ontario – from Windsor to Niagara
                Region to Ottawa and Cornwall, throughout the Greater Toronto Area and as far north as Thunder Bay and
                Pickle Lake.
            </p>
        </section>
    );
}

export default WhereWeAre;
