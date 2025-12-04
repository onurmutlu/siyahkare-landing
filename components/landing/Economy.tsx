
import React from 'react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { ArrowRight, TrendingUp, Lock, RefreshCcw } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';

export const Economy: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { t } = useLanguage();
  
  return (
    <Section id="economy">
      <div className="container mx-auto max-w-4xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          {t('economy.title')}
        </h2>
        <p className="text-gray-400 text-lg">
          {t('economy.desc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4 text-primary">
            <RefreshCcw className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mb-2">{t('economy.cards.c1.title')}</h3>
          <p className="text-sm text-gray-400">{t('economy.cards.c1.desc')}</p>
        </div>
        
        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto bg-secondary/10 rounded-2xl flex items-center justify-center mb-4 text-secondary">
            <TrendingUp className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mb-2">{t('economy.cards.c2.title')}</h3>
          <p className="text-sm text-gray-400">{t('economy.cards.c2.desc')}</p>
        </div>

        <div className="text-center p-6">
          <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-4 text-white">
            <Lock className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-bold mb-2">{t('economy.cards.c3.title')}</h3>
          <p className="text-sm text-gray-400">{t('economy.cards.c3.desc')}</p>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button 
          variant="ghost" 
          className="text-secondary border border-secondary/30 hover:bg-secondary/10"
          onClick={() => navigateTo('whitepaper')}
        >
          {t('economy.cta')}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </Section>
  );
};
