/* eslint-disable react-refresh/only-export-components */
import { Context, ReactNode, createContext, useContext, useMemo, useState } from "react";
import { BasicContextType } from "../types/ContextType";

const context = createContext<BasicContextType | null>(null); // Context share throughout the whole app

const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

  // useMemo will only recompute the memoized value when one of the deps has changed
  const value = useMemo(
    () => ({
      isSideBarOpen,
      setIsSideBarOpen,
    }),
    [isSideBarOpen, setIsSideBarOpen]
  );

  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;

export const useContextProvider = () =>
  useContext<BasicContextType>(context as Context<BasicContextType>); // this is the custom hook that you have to import
