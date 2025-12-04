
import React from 'react';
import { NavigationProvider, useNavigation } from './components/context/NavigationContext';
import { LanguageProvider, useLanguage } from './components/context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/landing/Hero';
import { WhatIs } from './components/landing/WhatIs';
import { WhyCitizen } from './components/landing/WhyCitizen';
import { Tasks } from './components/landing/Tasks';
import { Economy } from './components/landing/Economy';
import { Governance } from './components/landing/Governance';
import { TargetAudience } from './components/landing/TargetAudience';
import { Roadmap } from './components/landing/Roadmap';
import { FAQ } from './components/landing/FAQ';
import { Footer } from './components/layout/Footer';
import { LegalLayout } from './components/layout/LegalLayout';

// Placeholder Pages Content
const ConstitutionPage = () => {
  const { t } = useLanguage();
  return (
    <LegalLayout title={t('legal.constTitle')} lastUpdated={t('legal.updated')}>
      <h3>Article I: Definition of State</h3>
      <p>
        SiyahKare is defined not as a corporation or a community, but as a sovereign digital micro-nation existing on the Telegram network. 
        Its sovereignty is derived from the collective consensus of its Citizens and the algorithmic enforcement of the AI Council.
      </p>
      
      <h3>Article II: Rights of Citizens</h3>
      <p>
        Every Citizen holding a valid rank (Level 1+) possesses the inherent right to:
      </p>
      <ul>
        <li>Earn NCR through verifiable labor (Nasip Tasks).</li>
        <li>Access transparent records of Economic Governance.</li>
        <li>Retain ownership of their digital assets and rank.</li>
        <li>Protection from arbitrary seizure, barring automated protocols defined in the Economic Guard code.</li>
      </ul>

      <h3>Article III: The AI Council</h3>
      <p>
        Executive economic power is vested in the AI Council (Neural Governor, Yield Balancer, Fiscal AI, Economic Guard). 
        These entities operate within the strict bounds of this Constitution. They cannot alter the Constitution itself without a Tier-1 Referendum.
      </p>

      <h3>Article IV: The NCR Currency</h3>
      <p>
        NCR is the lifeblood of the State. Its supply, emission, and burning are regulated to ensure sustainability. 
        Any attempt to artificially manipulate the NCR value outside of Constitutional parameters is an act of treason.
      </p>
      
      <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary">
        * This document is a summary. The full cryptographic hash of the Constitution is stored on the chain.
      </div>
    </LegalLayout>
  );
};

const WhitepaperPage = () => {
  const { t } = useLanguage();
  return (
    <LegalLayout title={t('legal.wpTitle')} lastUpdated={t('legal.updated')}>
      <h3>Abstract</h3>
      <p>
        The current digital economy treats users as products. Platforms extract value from attention and labor without fair compensation. 
        SiyahKare proposes a new model: <strong>The Citizen Economy</strong>. By leveraging AI governance and a micro-nation framework on Telegram, 
        we transform passive users into active Citizens with rights, ranks, and revenue.
      </p>

      <h3>1. Introduction</h3>
      <p>
        SiyahKare is a gamified micro-nation. It uses the "Nasip Tasks Engine" to verify human effort and the "NCR Token" to distribute value.
        Unlike traditional "play-to-earn" models which rely on Ponzi-like influxes of new users, SiyahKare focuses on "Action-to-Value" conversion, 
        where external revenue (GMV) supports internal value.
      </p>

      <h3>2. The NCR Tokenomics</h3>
      <p>
        <strong>Ticker:</strong> NCR<br/>
        <strong>Type:</strong> Utility & Governance<br/>
        <strong>Policy:</strong> Net-Zero Inflation Target
      </p>
      <p>
        The AI Council monitors the "faucet" (emissions from tasks) and the "sink" (burns from services/taxes). 
        If inflation exceeds the safe band, the <em>Fiscal AI</em> automatically adjusts task rewards (DRM) to cool the economy down.
      </p>

      <h3>3. Governance Structure</h3>
      <p>
        Governance is hybrid. The <strong>President (Baron)</strong> holds the vision and veto power. 
        The <strong>AI Council</strong> manages the daily mathematical execution. 
        <strong>Citizens</strong> gain voting power proportional to their Rank and Contribution Score.
      </p>

      <h3>4. Roadmap Summary</h3>
      <p>
        We are currently in the <strong>Genesis Phase</strong>. The focus is on building the core citizen base and refining the Nasip algorithms.
        Phase 2 will introduce the full AI Council deployment.
      </p>

      <div className="mt-12 text-center">
        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
          Download PDF (Coming Soon)
        </button>
      </div>
    </LegalLayout>
  );
};

const LandingPage = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <WhatIs />
      <WhyCitizen />
      <Tasks />
      <Economy />
      <Governance />
      <TargetAudience />
      <Roadmap />
      <FAQ />
    </main>
    <Footer />
  </>
);

const AppContent = () => {
  const { currentView } = useNavigation();

  switch (currentView) {
    case 'constitution':
      return <ConstitutionPage />;
    case 'whitepaper':
      return <WhitepaperPage />;
    default:
      return <LandingPage />;
  }
};

function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-white font-sans antialiased">
          <AppContent />
        </div>
      </NavigationProvider>
    </LanguageProvider>
  );
}

export default App;
