// MADD.js
import React from 'react';

function MADD() {
    return (
        <section id="madd" className=" bg-white">
            <div className="container">
                <div className="row justify-content-md-center text-center mb-4 ">
                    <div className="col-md-6">
                        <img src="/assets/img/MADD logo.png" alt="MADD Logo" className="image-transition" />
                    </div>
                    <p className="pt-4 lead text-black">
                        Proud of its affiliation /w MADD Canada, <span className="highlight">GOTSKILL?</span> is a
                        recognized Official Sponsor, donating a minimum of $100,000/year.{' '}
                        <span className="highlight">GOTSKILL?</span> gives a percentage of its revenue to MADD Canada -
                        and offers players the opportunity to donate a portion, or all of their winnings, to the
                        charity.
                    </p>
                </div>
            </div>
        </section>
    );
}

// <section id="madd" className="madd">
//     <h2>MADD</h2>
//     <img src="/assets/img/MADD logo.png" alt="MADD Logo" className="image-transition" />
//     <p>
// Proud of its affiliation /w MADD Canada, <span className="highlight">GOTSKILL?</span> is a recognized
// Official Sponsor, donating a minimum of $100,000/year. <span className="highlight">GOTSKILL?</span>{' '}
// gives a percentage of its revenue to MADD Canada – and offers players the opportunity to donate a
// portion, or all of their winnings, to the charity.
//     </p>
// </section>
export default MADD;
