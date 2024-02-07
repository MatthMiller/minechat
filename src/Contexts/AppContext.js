import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [appGlobalData, setAppGlobalData] = useState(false);
  const [shouldResetContext, setShouldResetContext] = useState(false);

  return (
    <AppContext.Provider
      value={{
        appGlobalData,
        setAppGlobalData,
        shouldResetContext,
        setShouldResetContext,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
