import { CHANGE_LANG } from "../actions/constants";

const initState = "en";

const changeLangReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_LANG:
      return state = action.payload;
    default:
      return state;
  }
}

export default changeLangReducer;