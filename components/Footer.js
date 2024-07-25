import React from 'react';

function Footer() {
    return (
        <footer class="app-footer text-md-left text-center">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6 mb-md-0 mb-4">
                        <ul class="footer-link">
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
                        <p class="copyright">&copy; 2024 GOTSKILL, LLC. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
