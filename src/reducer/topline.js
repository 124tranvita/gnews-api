import { FETCH_TOPLINE, FETCH_TOPLINE_SUCCESS, FETCH_TOPLINE_FAILED } from "../actions/constants";

const initState = {
  loading: false,
  articles: [],
  error: null
}

const toplineReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_TOPLINE:
      return {
        ...state,
        loading: true
      }
    case FETCH_TOPLINE_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload
      }
    case FETCH_TOPLINE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default toplineReducer;