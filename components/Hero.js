'use client';
import React from 'react';

function Hero() {
    return (
        <section id="home" class="section-gap section-top bg-white">
            <div class="hero-img bg-overlay curve-bottom-1" data-overlay="0"></div>
            <div class="container">
                <div class="row align-items-center">
                    <div class=" col-md-6">
                        <h1 class="text-white font-weight-800 font-size-72 mb-md-5 mb-3">
                            Turn Fun into FUNDS with GOTSKILL?
                        </h1>
                        <h5 className="text-white mb-5 font-weight-normal">
                            Discover how our no-cost, easy-to-install game systems can boost your business and engage
                            your customers.
                        </h5>
                        <div class=" mb-0">
                            <a
                                href="https://themeforest.net/item/clab-multipurpose-html5-template/23489597?ref=vectorlab"
                                class="cta-button "
                            >
                                Schedule a Free Consultation
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
// <section id="hero" className=" hero section-gap mt-3">
//     <div className="container pb-3">
//         <div className="hero-video">
// <video
//     src="/assets/img/Landing Page - Hero Video.mp4"
//     alt="GOTSKILL games in action"
//     loading="lazy"
//     autoPlay
//     loop
//     muted
//     className="video-transition"
// />
//         </div>

// <h1 className="mt-3 font-size-60 text-nowrap">Turn Fun into FUNDS with GOTSKILL?</h1>

{
    /* <h5 className="text-muted mb-5 font-weight-normal">
    Discover how our no-cost, easy-to-install game systems can boost your business and engage your
    customers.
</h5> */
}

// <a href="#contact-now" className="cta-button">
//     Schedule a Free Consultation
// </a>
//     </div>
// </section>

export default Hero;
