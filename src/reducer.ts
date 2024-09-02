import { ActionType, StateType } from "./contextType";

const defaultTheme = localStorage.getItem("theme") ?? "white";
export const initialState: StateType = {
  theme: defaultTheme,
  lang: "en",
};
export const reducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "theme":
      return {
        ...state,
        theme: action.payload === "dark" ? "white" : "dark",
        lang: "",
      };
    case "lang":
      return { ...state, theme: defaultTheme, lang: "us" };
    default:
      return state;
  }
};
