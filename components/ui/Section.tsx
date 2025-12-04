import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, fullWidth = false }) => {
  return (
    <section id={id} className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      {fullWidth ? (
        children
      ) : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
          {children}
        </div>
      )}
    </section>
  );
};