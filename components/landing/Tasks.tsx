
import React from 'react';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { CheckCircle2, RefreshCw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Tasks: React.FC = () => {
  const { t } = useLanguage();

  return (
    <Section id="tasks" className="bg-gradient-to-b from-dark to-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            {t('tasks.title')} <br />
            <span className="text-primary">{t('tasks.titleHighlight')}</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            {t('tasks.desc')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Card className="bg-dark/50 border-primary/20">
              <h4 className="font-bold text-primary mb-2">{t('tasks.cats.title')}</h4>
              <p className="text-sm text-gray-400">{t('tasks.cats.desc')}</p>
            </Card>
            <Card className="bg-dark/50 border-secondary/20">
              <h4 className="font-bold text-secondary mb-2">{t('tasks.rewards.title')}</h4>
              <p className="text-sm text-gray-400">{t('tasks.rewards.desc')}</p>
            </Card>
          </div>
          
          <div className="p-4 rounded-lg bg-white/5 border-l-4 border-secondary text-sm text-gray-300">
            {t('tasks.daily')} <span className="text-white font-bold">{t('tasks.dailyVal')}</span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <Card className="relative overflow-hidden border-white/10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-xl">{t('tasks.loop.title')}</h3>
              <RefreshCw className="w-5 h-5 text-gray-500 animate-spin-slow" />
            </div>
            
            <div className="space-y-4">
              {(t('tasks.loop.items') as string[]).map((item, i) => (
                <div key={i} className="flex items-center p-3 rounded bg-white/5">
                  <CheckCircle2 className="w-5 h-5 text-secondary mr-3" />
                  <span className="text-sm text-gray-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <div className="text-xs text-gray-500 mb-1">{t('tasks.loop.potential')}</div>
              <div className="text-2xl font-mono font-bold text-primary tracking-widest">
                +190 NCR
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
};
