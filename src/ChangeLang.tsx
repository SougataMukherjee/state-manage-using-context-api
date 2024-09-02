import { useContext } from "react";
import LangContext from "./LangContext";
import { langContextType } from "./contextType";

const ChangeLang = () => {
  const { lang, dispatch } = useContext(LangContext) as langContextType;
  return (
    <>
      <p>Lang: {lang}</p>
      <button onClick={() => dispatch && dispatch({ type: "lang" })}>
        Change Lang
      </button>
    </>
  );
};

export default ChangeLang;
