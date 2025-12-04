
import React from 'react';
import { Button } from '../ui/Button';
import { ArrowRight, FileText } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/80 to-dark pointer-events-none"></div>
      
      {/* Abstract Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="container mx-auto px-4 z-10 text-center max-w-5xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider mb-8 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {t('hero.phase')}
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 tracking-tight">
          {t('hero.titlePrefix')} <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
            {t('hero.titleHighlight')}
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12 text-left text-sm text-gray-400">
          <div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm">
            <div className="text-primary mt-1">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/></svg>
            </div>
            <div>
              <strong className="block text-white">{t('hero.bullets.telegram.title')}</strong>
              {t('hero.bullets.telegram.desc')}
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm">
            <div className="text-secondary mt-1">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
            </div>
            <div>
              <strong className="block text-white">{t('hero.bullets.tasks.title')}</strong>
              {t('hero.bullets.tasks.desc')}
            </div>
          </div>
           <div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm">
            <div className="text-primary mt-1">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/></svg>
            </div>
            <div>
              <strong className="block text-white">{t('hero.bullets.ai.title')}</strong>
              {t('hero.bullets.ai.desc')}
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 border border-white/5 rounded-lg bg-white/5 backdrop-blur-sm">
            <div className="text-secondary mt-1">
               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
            </div>
            <div>
              <strong className="block text-white">{t('hero.bullets.actor.title')}</strong>
              {t('hero.bullets.actor.desc')}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" size="lg" className="w-full sm:w-auto group">
            {t('hero.cta.enter')}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="secondary" 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => navigateTo('whitepaper')}
          >
            <FileText className="mr-2 w-4 h-4" />
            {t('hero.cta.whitepaper')}
          </Button>
        </div>
      </div>
    </div>
  );
};
