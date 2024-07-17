import { CHANGE_THEME } from "../actions/theme";
import { getTheme } from "../utils/localStorage";

const initialState = getTheme() || "light";

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;
