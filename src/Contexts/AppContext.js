import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appGlobalData, setAppGlobalData] = useState({});

  return (
    <AppContext.Provider value={{ appGlobalData, setAppGlobalData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
