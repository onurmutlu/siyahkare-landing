import React from 'react';

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

export interface RoadmapPhase {
  phase: string;
  title: string;
  items: string[];
  status: 'completed' | 'current' | 'future';
}

export interface NavItem {
  label: string;
  href: string;
}