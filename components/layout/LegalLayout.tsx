
import React from 'react';
import { Button } from '../ui/Button';
import { ArrowLeft } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLanguage } from '../context/LanguageContext';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  const { navigateTo } = useNavigation();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-dark text-white font-sans antialiased flex flex-col">
      <Navbar />
      <div className="flex-grow pt-24 pb-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Button 
            variant="ghost" 
            onClick={() => navigateTo('landing')}
            className="mb-8 -ml-4 text-gray-400 hover:text-white group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {t('legal.back')}
          </Button>
          
          <div className="glass-panel p-8 md:p-12 rounded-2xl border border-white/10 bg-black/40 shadow-2xl">
            <header className="mb-12 border-b border-white/10 pb-8">
              <h1 className="text-3xl md:text-5xl font-display font-bold mb-4 text-white tracking-tight">
                {title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-gray-500 uppercase tracking-wider">
                <span>{t('legal.version')}</span>
                <span className="text-white/20">•</span>
                <span>{lastUpdated}</span>
                <span className="text-white/20">•</span>
                <span className="text-primary border border-primary/30 px-2 py-0.5 rounded bg-primary/5">{t('legal.authority')}</span>
              </div>
            </header>
            
            <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-white text-gray-300 leading-relaxed">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
