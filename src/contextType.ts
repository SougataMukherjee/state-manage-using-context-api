import { ReactNode } from "react";
export type ThemeAction =
  | { type: "theme"; payload: string }
  | { type: "lang"; payload?: string };

export type themeContextType = {
  theme: string;
  dispatch?: React.Dispatch<ThemeAction>;
};
export type langContextType = {
  lang: string;
  dispatch?: React.Dispatch<ThemeAction>;
};
export type StateType = {
  theme: string;
  lang: string;
};

export type ActionType = { type: "theme"; payload: string } | { type: "lang" };

export type ContextProviderProps = {
  children: ReactNode;
};
