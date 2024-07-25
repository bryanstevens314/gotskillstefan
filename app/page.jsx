import ContactNow from 'components/ContactNow';
import Features from 'components/Features';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Hero from 'components/Hero';
import MADD from 'components/MADD';
import WhatIsGOTSKILL from 'components/WhatIsGOTSKILL';
import WhereWeAre from 'components/WhereWeAre';

export default function Page() {
    return (
        <main className="flex flex-col gap-8 sm:gap-16">
            <div className="App">
                <Header />
                <main>
                    <Hero />
                    <WhatIsGOTSKILL />
                    <Features />
                    <MADD />
                    <WhereWeAre />
                    <ContactNow />
                </main>
                <Footer />
            </div>
        </main>
    );
}
