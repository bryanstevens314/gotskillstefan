'use client';
import React, { useEffect, useState } from 'react';

function Hero() {
    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);
    return (
        <section id="home" className="section-gap section-top bg-white">
            <div className="hero-img bg-overlay curve-bottom-1" data-overlay="0">
                {!isSafari && (
                    <video
                        id="background-video"
                        autoPlay
                        loop
                        loading="lazy"
                        muted
                        src="/assets/img/Landing Page - Hero Video.mp4"
                    />
                )}
            </div>
            <div className="container mobile-offset">
                <div className="row align-items-center">
                    <div className=" col-md-6">
                        <h1 className="text-white font-weight-800 font-size-72 mb-md-5 mb-3">
                            Turn Fun into FUNDS with GOTSKILL?
                        </h1>
                        <h5 className="text-white mb-5 font-weight-normal">
                            Discover how our no-cost, easy-to-install game systems can boost your business and engage
                            your customers.
                        </h5>
                        <div className=" mb-0">
                            <a
                                href="https://themeforest.net/item/clab-multipurpose-html5-template/23489597?ref=vectorlab"
                                className="cta-button "
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

export default Hero;
