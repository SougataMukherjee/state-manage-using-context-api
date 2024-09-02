import { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "./reducer";
import { ContextProviderProps } from "./contextType";
const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }: ContextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { theme } = state;

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
