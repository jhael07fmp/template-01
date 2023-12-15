/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useMemo, useState } from "react";
import { BasicContextType } from "../types/ContextType";

const context = createContext<BasicContextType | null>(null); // Context share throughout the whole app

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // useMemo will only recompute the memoized value when one of the deps has changed
  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
    }),
    [isOpen, setIsOpen]
  );

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;

export const useContextProvider = () => useContext(context); // this is the custom hook that you have to import
