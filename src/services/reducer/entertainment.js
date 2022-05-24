import {
  FETCH_ENTMT,
  FETCH_ENTMT_SUCCESS,
  FETCH_ENTMT_FAILED,
} from "../actions/constants";

const initState = {
  loading: false,
  articles: [],
  error: null,
};

const entertainmentReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_ENTMT:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ENTMT_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
      };
    case FETCH_ENTMT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default entertainmentReducer;
