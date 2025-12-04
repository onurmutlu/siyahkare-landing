
import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { useLanguage } from '../context/LanguageContext';

export const WhatIs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="about" className="bg-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {t('whatIs.title')}
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              {t('whatIs.p1')}
            </p>
            <p className="text-xl text-white font-medium pl-4 border-l-2 border-primary">
              {t('whatIs.highlight')}
            </p>
            <p>
              {t('whatIs.p2')}
            </p>
            <div className="pt-4 text-sm font-mono text-gray-500">
              {t('whatIs.stack')}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
          <div className="relative space-y-3">
            {[
              { label: t('whatIs.layers.l1.title'), sub: t('whatIs.layers.l1.sub'), color: 'border-white/40' },
              { label: t('whatIs.layers.l2.title'), sub: t('whatIs.layers.l2.sub'), color: 'border-primary' },
              { label: t('whatIs.layers.l3.title'), sub: t('whatIs.layers.l3.sub'), color: 'border-secondary' },
              { label: t('whatIs.layers.l4.title'), sub: t('whatIs.layers.l4.sub'), color: 'border-white/20' },
              { label: t('whatIs.layers.l5.title'), sub: t('whatIs.layers.l5.sub'), color: 'border-white/10' },
            ].map((layer, index) => (
              <Card key={index} className={`py-4 px-6 border ${layer.color} bg-black/40 backdrop-blur-xl hover:scale-[1.02] transition-transform`}>
                <div className="flex justify-between items-center">
                  <span className="font-display font-bold text-white tracking-wide">{layer.label}</span>
                  <span className="text-xs text-gray-400 font-mono hidden sm:block">{layer.sub}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
