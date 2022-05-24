import {
  FETCH_LATEST,
  FETCH_LATEST_SUCCESS,
  FETCH_LATEST_FAILED,
  CHANGE_LATEST_TOPIC,
} from "../actions/constants";

const initState = {
  loading: false,
  articles: [],
  error: null,
  topic: "world",
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
        error: null,
      };
    case FETCH_LATEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CHANGE_LATEST_TOPIC:
      return {
        ...state,
        topic: action.payload,
      };
    default:
      return state;
  }
};

export default latestReducer;
