import React, { createContext, useState, ReactNode } from "react";

interface AppContextProps {
  genre: string;
  setGenre: (genre: string) => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [genre, setGenre] = useState<string>("");

  return (
    <AppContext.Provider value={{ genre, setGenre }}>
      {children}
    </AppContext.Provider>
  );
};
