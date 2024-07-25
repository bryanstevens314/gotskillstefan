import React from 'react';
import logo from '../public/assets/img/gotskills vector.png';

function Header() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="GOTSKILL" className="logo-img logo-transition fade-in" />
            </div>
            <div className="menu-toggle">☰</div>
            <nav>
                <a href="#hero">Home</a>
                <a href="#what-is-gotskill">What Is GOTSKILL?</a>
                <a href="#features">Features</a>
                <a href="#madd">MADD</a>
                <a href="#where-we-are">Where We Are</a>
                <a href="#contact-now" className="cta-button">
                    Contact NOW!
                </a>
            </nav>
        </header>
    );
}

export default Header;
