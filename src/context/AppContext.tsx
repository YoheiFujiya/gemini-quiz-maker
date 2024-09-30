import React, { createContext, useState, ReactNode, useContext } from "react";

interface AppContextProps {
  genre: string;
  setGenre: (genre: string) => void;
}

export const AppContext = createContext<AppContextProps>({
  genre: "",
  setGenre: () => {},
});

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [genre, setGenre] = useState<string>("ランダム");

  return (
    <AppContext.Provider value={{ genre, setGenre }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
