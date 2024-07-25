import React from 'react';
import easyStartImage from '../public/assets/img/EasyStart.png';
import noCostImage from '../public/assets/img/NoCost.png';
import revenueShareImage from '../public/assets/img/RevShare.png';
import effortlessImage from '../public/assets/img/Effortless.png';

function Features() {
    return (
        <section id="features" className="features fade-in">
            <h2>Features</h2>
            <div className="feature feature-transition">
                <img src={easyStartImage} alt="So Easy To Get Started Icon" loading="lazy" />
                <h3>So Easy To Get Started!</h3>
                <p>Our quick Application and Agreement signup is a cinch.</p>
            </div>
            <div className="feature feature-transition">
                <img src={noCostImage} alt="No Cost Icon" loading="lazy" />
                <h3>No-Cost Installation</h3>
                <p>We charge nothing for installation, and there are no monthly minimum or fixed royalty fees.</p>
            </div>
            <div className="feature feature-transition">
                <img src={revenueShareImage} alt="Pure Revenue Share Icon" loading="lazy" />
                <h3>Pure Revenue Share!</h3>
                <p>We win when you win: Free equipment installation, shared profits.</p>
            </div>
            <div className="feature feature-transition">
                <img src={effortlessImage} alt="Effortless Icon" loading="lazy" />
                <h3>Effortless!</h3>
                <p>Customers can start playing without tying up staff. Redemptions are quick and easy.</p>
            </div>
        </section>
    );
}

export default Features;
