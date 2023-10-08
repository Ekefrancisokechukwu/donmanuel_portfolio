"use client";

import {
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AppProviderType = {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const AppContext = createContext<AppProviderType | null>(null);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <AppContext.Provider value={{ isMenuOpen, openMenu, closeMenu }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("you can use ");
  }

  return context;
};
export default AppProvider;
