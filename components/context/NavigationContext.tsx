
import React, { createContext, useContext, useState } from 'react';

export type View = 'landing' | 'constitution' | 'whitepaper';

interface NavigationContextType {
  currentView: View;
  navigateTo: (view: View) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentView: 'landing',
  navigateTo: () => {},
});

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<View>('landing');

  const navigateTo = (view: View) => {
    window.scrollTo(0, 0);
    setCurrentView(view);
  };

  return (
    <NavigationContext.Provider value={{ currentView, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
