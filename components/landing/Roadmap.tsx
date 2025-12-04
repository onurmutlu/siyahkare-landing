
import React from 'react';
import { Section } from '../ui/Section';
import { useLanguage } from '../context/LanguageContext';

export const Roadmap: React.FC = () => {
  const { t } = useLanguage();

  const phases = [
    {
      id: "01",
      name: t('roadmap.phases.p1.name'),
      status: "Current",
      items: t('roadmap.phases.p1.items')
    },
    {
      id: "02",
      name: t('roadmap.phases.p2.name'),
      status: "Next",
      items: t('roadmap.phases.p2.items')
    },
    {
      id: "03",
      name: t('roadmap.phases.p3.name'),
      status: "Future",
      items: t('roadmap.phases.p3.items')
    },
    {
      id: "04",
      name: t('roadmap.phases.p4.name'),
      status: "Future",
      items: t('roadmap.phases.p4.items')
    }
  ];

  return (
    <Section id="roadmap" className="bg-dark">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t('roadmap.title')}</h2>
        <p className="text-gray-400">{t('roadmap.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {phases.map((phase, idx) => (
          <div key={idx} className="relative group">
            {/* Connector Line (Mobile hidden, Desktop visible) */}
            {idx !== phases.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-full w-full h-[1px] bg-white/10 -z-10 group-hover:bg-primary/50 transition-colors"></div>
            )}
            
            <div className="w-12 h-12 rounded-full border border-white/20 bg-dark flex items-center justify-center text-sm font-mono text-gray-400 mb-6 group-hover:border-primary group-hover:text-primary transition-colors">
              {phase.id}
            </div>
            
            <h3 className="text-xl font-bold font-display mb-2">{phase.name}</h3>
            <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider rounded border mb-4 ${
              phase.status === 'Current' ? 'border-primary text-primary bg-primary/10' : 
              phase.status === 'Next' ? 'border-secondary text-secondary bg-secondary/10' :
              'border-gray-700 text-gray-500'
            }`}>
              {phase.status}
            </span>
            
            <ul className="space-y-2">
              {(phase.items as string[]).map((item, i) => (
                <li key={i} className="text-sm text-gray-500 flex items-start">
                  <span className="mr-2 text-white/20">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
