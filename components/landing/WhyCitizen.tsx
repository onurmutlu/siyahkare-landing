
import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Coins, ShieldCheck, Trophy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const WhyCitizen: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Coins className="w-8 h-8 text-secondary" />,
      title: t('benefits.b1.title'),
      description: t('benefits.b1.desc'),
      details: t('benefits.b1.details')
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: t('benefits.b2.title'),
      description: t('benefits.b2.desc'),
      details: t('benefits.b2.details')
    },
    {
      icon: <Trophy className="w-8 h-8 text-white" />,
      title: t('benefits.b3.title'),
      description: t('benefits.b3.desc'),
      details: t('benefits.b3.details')
    }
  ];

  return (
    <Section id="benefits">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
          {t('benefits.title')}
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          {t('benefits.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, idx) => (
          <Card key={idx} hoverEffect className="h-full border-t-4 border-t-transparent hover:border-t-primary">
            <div className="mb-6 bg-white/5 w-16 h-16 rounded-full flex items-center justify-center border border-white/10">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 font-display">{benefit.title}</h3>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {benefit.description}
            </p>
            <ul className="space-y-2">
              {(benefit.details as string[]).map((detail, i) => (
                <li key={i} className="flex items-center text-sm text-gray-500">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
};
