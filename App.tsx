
import React, { useEffect } from 'react';
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
      <h3>{t('legal.content.constitution.art1.title')}</h3>
      <p>{t('legal.content.constitution.art1.body')}</p>
      
      <h3>{t('legal.content.constitution.art2.title')}</h3>
      <p>{t('legal.content.constitution.art2.body')}</p>

      <h3>{t('legal.content.constitution.art3.title')}</h3>
      <p>{t('legal.content.constitution.art3.body')}</p>

      <h3>{t('legal.content.constitution.art4.title')}</h3>
      <p>{t('legal.content.constitution.art4.body')}</p>
      
      <div className="mt-8 p-4 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary">
        {t('legal.content.constitution.disclaimer')}
      </div>
    </LegalLayout>
  );
};

const WhitepaperPage = () => {
  const { t } = useLanguage();
  return (
    <LegalLayout title={t('legal.wpTitle')} lastUpdated={t('legal.updated')}>
      <h3>{t('legal.content.whitepaper.abstract.title')}</h3>
      <p>{t('legal.content.whitepaper.abstract.body')}</p>

      <h3>{t('legal.content.whitepaper.intro.title')}</h3>
      <p>{t('legal.content.whitepaper.intro.body')}</p>

      <h3>{t('legal.content.whitepaper.tokenomics.title')}</h3>
      <p>{t('legal.content.whitepaper.tokenomics.body')}</p>

      <h3>{t('legal.content.whitepaper.governance.title')}</h3>
      <p>{t('legal.content.whitepaper.governance.body')}</p>

      <h3>{t('legal.content.whitepaper.roadmap.title')}</h3>
      <p>{t('legal.content.whitepaper.roadmap.body')}</p>

      <div className="mt-12 text-center">
        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
          {t('legal.download')}
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
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = t('meta.title');
  }, [language, t]);

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
