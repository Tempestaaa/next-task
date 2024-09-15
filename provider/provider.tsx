"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface Props {
  children: ReactNode;
}

interface iContext {
  isAddModalOpen: boolean;
  setIsAddModalOpen: Dispatch<SetStateAction<boolean>>;
}
export const Context = createContext<iContext | undefined>(undefined);

export const ContextProvider = ({ children }: Props) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <Context.Provider value={{ isAddModalOpen, setIsAddModalOpen }}>
      {children}
    </Context.Provider>
  );
};
