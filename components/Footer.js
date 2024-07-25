import React from 'react';

function Footer() {
    return (
        <footer className="app-footer text-md-left text-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-md-0 mb-4">
                        <ul className="footer-link">
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/help">Help</a>
                            </li>
                            <li>
                                <a href="/privacy">Privacy</a>
                            </li>
                            <li>
                                <a href="/terms">Terms</a>
                            </li>
                        </ul>
                        <p className="copyright">&copy; 2024 GOTSKILL, LLC. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
