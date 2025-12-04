
import React, { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import { Menu, X, Globe } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../utils/translations';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  
  const { navigateTo, currentView } = useNavigation();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (currentView !== 'landing') {
        navigateTo('landing');
        setTimeout(() => {
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.benefits'), href: '#benefits' },
    { label: t('nav.economy'), href: '#economy' },
    { label: t('nav.governance'), href: '#governance' },
    { label: t('nav.roadmap'), href: '#roadmap' },
  ];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentView !== 'landing' ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <button 
          onClick={() => navigateTo('landing')} 
          className="font-display font-bold text-2xl tracking-tighter text-white z-50 hover:opacity-80 transition-opacity"
        >
          Siyah<span className="text-primary">Kare</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {currentView === 'landing' && navLinks.map((link) => (
            <button 
              key={link.href} // Key should be unique, href is safer than label which changes
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          
          <div className="relative">
            <button 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white uppercase transition-colors"
            >
              <Globe className="w-4 h-4" />
              {language}
            </button>
            
            {langMenuOpen && (
              <div className="absolute top-full right-0 mt-2 bg-dark border border-white/10 rounded-md overflow-hidden shadow-xl min-w-[80px]">
                {(['tr', 'en', 'ru'] as Language[]).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageChange(lang)}
                    className={`block w-full text-left px-4 py-2 text-sm uppercase hover:bg-white/10 ${language === lang ? 'text-primary' : 'text-gray-400'}`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button variant="primary" size="sm" className="ml-4">
            {t('nav.citizenPortal')}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
           <button 
              onClick={() => {
                const langs: Language[] = ['tr', 'en', 'ru'];
                const nextIndex = (langs.indexOf(language) + 1) % langs.length;
                setLanguage(langs[nextIndex]);
              }}
              className="text-white text-sm uppercase font-mono border border-white/20 px-2 py-1 rounded"
            >
              {language}
            </button>
            <button 
              className="text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
             {navLinks.map((link) => (
              <button 
                key={link.href} 
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button variant="primary" size="lg" className="mt-8">
              {t('nav.citizenPortal')}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
