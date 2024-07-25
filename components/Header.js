import React from 'react';

function Header() {
    return (
        <header className="app-header  transparent-header-dark-nav">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="navbar-brand float-left">
                        <a className="" href="index.html">
                            <img
                                src="/assets/img/gotskills vector.png"
                                alt="GOTSKILL"
                                className="logo-img logo-transition"
                            />
                        </a>
                    </div>
                    <nav id="vl-menu">
                        <ul className="vlmenu light-sub-menu slide-effect float-right">
                            <li>
                                <a href="#home">Home</a>
                            </li>
                            <li>
                                <a href="#what-is-gotskill">What Is GOTSKILL?</a>
                            </li>
                            <li>
                                <a href="#features">Features</a>
                            </li>
                            <li>
                                <a href="#madd">MADD</a>
                            </li>
                            <li>
                                <a href="#where-we-are">Where We Are</a>
                            </li>
                            <li>
                                <a href="#contact-now">Contact NOW!</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
