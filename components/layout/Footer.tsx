
import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { navigateTo } = useNavigation();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 bg-black py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            Siyah<span className="text-primary">Kare</span>
          </span>
        </div>
        
        <p className="text-xl md:text-2xl font-display text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('footer.claim')}
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-white/5 pt-8 mt-8">
          <div>
            {t('footer.rights')}
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button onClick={() => navigateTo('constitution')} className="hover:text-white transition-colors text-left">{t('nav.constitution')}</button>
            <button onClick={() => navigateTo('whitepaper')} className="hover:text-white transition-colors text-left">{t('nav.whitepaper')}</button>
            <a href="https://x.com/SiyahKare" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X.com</a>
            <a href="#" className="hover:text-white transition-colors">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
