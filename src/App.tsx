import "./App.css";
import ThemeContext, { ThemeContextProvider } from "./ThemeContext";
import { LangContextProvider } from "./LangContext";
import ChangeThemeButton from "./ChangeThemeButton";
import ChangeLang from "./ChangeLang";
import { useContext } from "react";
import { themeContextType } from "./contextType";

export default function App() {
  return (
    <ThemeContextProvider>
      <Content />
    </ThemeContextProvider>
  );
}

const Content = () => {
  const { theme } = useContext(ThemeContext) as themeContextType;
  return (
    <div className={theme}>
      <LangContextProvider>
        <ChangeLang />
        <ChangeThemeButton />
      </LangContextProvider>
    </div>
  );
};
