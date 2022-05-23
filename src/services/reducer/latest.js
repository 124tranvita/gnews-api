import {
  FETCH_LATEST,
  FETCH_LATEST_SUCCESS,
  FETCH_LATEST_FAILED,
} from "../actions/constants";

const initState = {
  loading: false,
  articles: [],
  error: null,
};

const latestReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_LATEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LATEST_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
      };
    case FETCH_LATEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default latestReducer;
