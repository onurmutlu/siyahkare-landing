
import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Cpu, Scale, Wallet, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Governance: React.FC = () => {
  const { t } = useLanguage();

  const council = [
    {
      name: t('governance.cards.c1.name'),
      role: t('governance.cards.c1.role'),
      desc: t('governance.cards.c1.desc'),
      icon: <Cpu className="w-6 h-6 text-primary" />
    },
    {
      name: t('governance.cards.c2.name'),
      role: t('governance.cards.c2.role'),
      desc: t('governance.cards.c2.desc'),
      icon: <Scale className="w-6 h-6 text-secondary" />
    },
    {
      name: t('governance.cards.c3.name'),
      role: t('governance.cards.c3.role'),
      desc: t('governance.cards.c3.desc'),
      icon: <Wallet className="w-6 h-6 text-green-400" />
    },
    {
      name: t('governance.cards.c4.name'),
      role: t('governance.cards.c4.role'),
      desc: t('governance.cards.c4.desc'),
      icon: <ShieldAlert className="w-6 h-6 text-red-400" />
    }
  ];

  return (
    <Section id="governance" className="bg-dark relative overflow-hidden">
      {/* Background Grid Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="mb-12">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
          {t('governance.title')}
        </h2>
        <p className="text-gray-400 max-w-xl">
          {t('governance.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {council.map((ai, idx) => (
          <Card key={idx} className="bg-surface/50 border-white/5 hover:border-white/20 transition-colors">
            <div className="mb-4 bg-black w-12 h-12 rounded flex items-center justify-center border border-white/10">
              {ai.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{ai.name}</h3>
            <div className="text-xs uppercase tracking-wider text-gray-500 mb-3">{ai.role}</div>
            <p className="text-sm text-gray-400 leading-snug">{ai.desc}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-lg border border-primary/20 bg-primary/5 max-w-2xl mx-auto text-center backdrop-blur-sm">
        <h4 className="text-primary font-bold mb-2">{t('governance.human.title')}</h4>
        <p className="text-sm text-gray-300">
          {t('governance.human.desc')}
        </p>
      </div>
    </Section>
  );
};
