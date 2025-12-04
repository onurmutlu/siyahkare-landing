import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(106,0,255,0.4)] border border-primary/50",
    secondary: "bg-transparent border border-secondary text-secondary hover:bg-secondary/10 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]",
    outline: "bg-transparent border border-white/20 text-white hover:border-white/50 hover:bg-white/5",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "text-sm px-4 py-1.5",
    md: "text-sm px-6 py-3",
    lg: "text-base px-8 py-4"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};