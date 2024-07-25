import ContactNow from 'components/ContactNow';
import Features from 'components/Features';
import Header from 'components/Header';
import Hero from 'components/Hero';
import MADD from 'components/MADD';
import WhatIsGOTSKILL from 'components/WhatIsGOTSKILL';
import WhereWeAre from 'components/WhereWeAre';

export default function Page() {
    return (
        <>
            <Hero />
            <WhatIsGOTSKILL />
            <Features />
            <MADD />
            <WhereWeAre />
            <ContactNow />
        </>
    );
}
