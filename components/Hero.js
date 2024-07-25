'use client';
import React from 'react';

function Hero() {
    return (
        <section id="hero" className="hero fade-in">
            <div className="hero-video">
                <video
                    src="/assets/img/Landing Page - Hero Video.mp4"
                    alt="GOTSKILL games in action"
                    loading="lazy"
                    autoPlay
                    loop
                    muted
                    className="video-transition"
                />
            </div>
            <h1>
                <span className="hero-inter">Turn Fun into FUNDS with</span>{' '}
                <span className="highlight">GOTSKILL?</span>
            </h1>
            <p>
                Discover how our no-cost, easy-to-install game systems can boost your business and engage your
                customers.
            </p>
            <a href="#contact-now" className="cta-button">
                Schedule a Free Consultation
            </a>
        </section>
    );
}

export default Hero;
