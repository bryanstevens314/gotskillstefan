// WhatIsGOTSKILL.js
import React from 'react';
import heroImage from '../public/assets/img/GOTSKILL Play.gif';

function WhatIsGOTSKILL() {
    return (
        <section id="what-is-gotskill" className="what-is-gotskill fade-in">
            <h2>
                What Is <span className="highlight">GOTSKILL?</span>
            </h2>
            <p>
                Our skill games challenge players’ hand-eye coordination and timing in over 38 games. People find them
                fun because the games are engaging, and their skills are tested.
            </p>
            <div className="gotskill-gif image-transition">
                <img src={heroImage} alt="GOTSKILL games in action" loading="lazy" />
            </div>
        </section>
    );
}

export default WhatIsGOTSKILL;
