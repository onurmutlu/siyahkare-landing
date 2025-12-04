import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div className={`glass-panel rounded-xl p-6 md:p-8 ${hoverEffect ? 'transition-transform duration-300 hover:-translate-y-1 hover:border-primary/30' : ''} ${className}`}>
      {children}
    </div>
  );
};