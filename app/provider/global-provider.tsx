"use client";

import { createContext, ReactNode } from "react";

export const Context = createContext({});

interface Props {
  children: ReactNode;
}

export const ContextProvider = ({ children }: Props) => {
  return <>{children}</>;
};
