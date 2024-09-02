import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { themeContextType } from "./contextType";
const ChangeThemeButton = () => {
  const { theme, dispatch } = useContext(ThemeContext) as themeContextType;
  return (
    <>
      <p>Theme: {theme}</p>
      <button
        onClick={() => dispatch && dispatch({ type: "theme", payload: theme })}
      >
        Change Theme
      </button>
    </>
  );
};

export default ChangeThemeButton;
