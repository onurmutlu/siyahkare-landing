
import React, { useState } from 'react';
import { Section } from '../ui/Section';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FAQItemProps {
  question: string;
  answer: string | React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 last:border-0">
      <button 
        className="w-full flex items-center justify-between py-6 text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`font-display font-medium text-lg transition-colors ${isOpen ? 'text-primary' : 'text-gray-300 group-hover:text-white'}`}>
          {question}
        </span>
        <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : 'text-gray-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <div className="text-gray-400 text-sm leading-relaxed pr-8">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const { t } = useLanguage();

  const items = [
    {
      q: t('faq.q1.q'),
      a: t('faq.q1.a')
    },
    {
      q: t('faq.q2.q'),
      a: t('faq.q2.a')
    },
    {
      q: t('faq.q3.q'),
      a: t('faq.q3.a')
    },
    {
      q: t('faq.q4.q'),
      a: t('faq.q4.a')
    },
    {
      q: t('faq.q5.q'),
      a: t('faq.q5.a')
    }
  ];

  return (
    <Section id="faq" className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-display font-bold text-center mb-12">{t('faq.title')}</h2>
      <div className="glass-panel rounded-xl px-6 md:px-8">
        {items.map((item, idx) => (
          <FAQItem key={idx} question={item.q} answer={item.a} />
        ))}
      </div>
    </Section>
  );
};
