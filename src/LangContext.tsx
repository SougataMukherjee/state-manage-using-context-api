import { createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";
import { ContextProviderProps } from "./contextType";
const LangContext = createContext({});

export const LangContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { lang } = state;

  return (
    <LangContext.Provider value={{ lang, dispatch }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangContext;
