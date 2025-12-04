
import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { useLanguage } from '../context/LanguageContext';

export const TargetAudience: React.FC = () => {
  const { t } = useLanguage();

  const personas = [
    {
      title: t('target.c1.title'),
      subtitle: t('target.c1.sub'),
      desc: t('target.c1.desc'),
      color: "border-secondary"
    },
    {
      title: t('target.c2.title'),
      subtitle: t('target.c2.sub'),
      desc: t('target.c2.desc'),
      color: "border-primary"
    },
    {
      title: t('target.c3.title'),
      subtitle: t('target.c3.sub'),
      desc: t('target.c3.desc'),
      color: "border-white"
    }
  ];

  return (
    <Section id="who-is-this-for">
      <h2 className="text-3xl font-display font-bold text-center mb-12">{t('target.title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {personas.map((p, idx) => (
          <Card key={idx} className={`border-t-2 ${p.color} border-x-0 border-b-0 rounded-none bg-gradient-to-b from-white/5 to-transparent`}>
            <h3 className="text-2xl font-bold font-display mb-1">{p.title}</h3>
            <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">{p.subtitle}</div>
            <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
};
