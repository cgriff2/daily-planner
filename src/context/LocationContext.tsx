// LocationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LocationContextType {
  location: string;
  setLocation: (location: string) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const useLocation = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [location, setLocation] = useState(localStorage.getItem('lastLocation') || 'Provo');

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};
