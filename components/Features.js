import React from 'react';
function Features() {
    return (
        <section id="features" className="features pt-5 pb-5">
            <div className="container">
                <div className="row justify-content-center align-items-center text-center">
                    <div className="col-md-8">
                        <h2 className="mb-3">Features</h2>
                        <p className="text-muted mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor
                            sit amet, consectetur adipiscing elit
                        </p>
                    </div>
                </div>
                <div className="row justify-content-center  text-center">
                    <div className="feature feature-transition">
                        <img src="/assets/img/EasyStart.png" alt="So Easy To Get Started Icon" loading="lazy" />
                        <h3>So Easy To Get Started!</h3>
                        <p>Our quick Application and Agreement signup is a cinch.</p>
                    </div>
                    <div className="feature feature-transition">
                        <img src="/assets/img/NoCost.png" alt="No Cost Icon" loading="lazy" />
                        <h3>No-Cost Installation</h3>
                        <p>
                            We charge nothing for installation, and there are no monthly minimum or fixed royalty fees.
                        </p>
                    </div>
                    <div className="feature feature-transition">
                        <img src="/assets/img/RevShare.png" alt="Pure Revenue Share Icon" loading="lazy" />
                        <h3>Pure Revenue Share!</h3>
                        <p>We win when you win: Free equipment installation, shared profits.</p>
                    </div>
                    <div className="feature feature-transition">
                        <img src={'/assets/img/Effortless.png'} alt="Effortless Icon" loading="lazy" />
                        <h3>Effortless!</h3>
                        <p>Customers can start playing without tying up staff. Redemptions are quick and easy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
// <section id="features" className="features">
//     <h2>Features</h2>
//     <div className="feature feature-transition">
//         <img src="/assets/img/EasyStart.png" alt="So Easy To Get Started Icon" loading="lazy" />
//         <h3>So Easy To Get Started!</h3>
//         <p>Our quick Application and Agreement signup is a cinch.</p>
// </div>
// <div className="feature feature-transition">
//     <img src="/assets/img/NoCost.png" alt="No Cost Icon" loading="lazy" />
//     <h3>No-Cost Installation</h3>
//     <p>We charge nothing for installation, and there are no monthly minimum or fixed royalty fees.</p>
// </div>
// <div className="feature feature-transition">
//     <img src="/assets/img/RevShare.png" alt="Pure Revenue Share Icon" loading="lazy" />
//     <h3>Pure Revenue Share!</h3>
//     <p>We win when you win: Free equipment installation, shared profits.</p>
// </div>
// <div className="feature feature-transition">
//     <img src={'/assets/img/Effortless.png'} alt="Effortless Icon" loading="lazy" />
//     <h3>Effortless!</h3>
//     <p>Customers can start playing without tying up staff. Redemptions are quick and easy.</p>
// </div>
// </section>

export default Features;
