// MADD.js
import React from 'react';
import maddLogo from '../public/assets/img/MADD logo.png';

function MADD() {
    return (
        <section id="madd" className="madd fade-in">
            <h2>MADD</h2>
            <img src={maddLogo} alt="MADD Logo" className="image-transition" />
            <p>
                Proud of its affiliation /w MADD Canada, <span className="highlight">GOTSKILL?</span> is a recognized
                Official Sponsor, donating a minimum of $100,000/year. <span className="highlight">GOTSKILL?</span>{' '}
                gives a percentage of its revenue to MADD Canada – and offers players the opportunity to donate a
                portion, or all of their winnings, to the charity.
            </p>
        </section>
    );
}

export default MADD;
