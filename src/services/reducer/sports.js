import { FETCH_SPORTS, FETCH_SPORTS_SUCCESS, FETCH_SPORTS_FAILED } from "../actions/constants";

const initState = {
  loading: false,
  articles: [],
  error: null
}

const sportsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SPORTS:
      return ({
        ...state,
        loading: true
      })
    case FETCH_SPORTS_SUCCESS:
      return ({
        ...state,
        loading: false,
        articles: action.payload
      })
    case FETCH_SPORTS_FAILED:
      return ({
        ...state,
        loading: false,
        error: action.payload
      })
    default:
      return state;
  }
}

export default sportsReducer;