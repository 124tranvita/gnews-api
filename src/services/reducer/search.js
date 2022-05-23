import { FETCH_SEARCH, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILED, SHOW_RESULT_MODAL, CLOSE_RESULT_MODAL } from "../actions/constants";

const initState = {
  loading: false,
  articles: [],
  error: null,
  show: false
}

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return ({
        ...state,
        loading: true
      });
    case FETCH_SEARCH_SUCCESS:
      return ({
        ...state,
        loading: false,
        articles: action.payload
      });
    case FETCH_SEARCH_FAILED:
      return ({
        ...state,
        loading: false,
        error: action.payload
      });
    case SHOW_RESULT_MODAL:
      return ({
        ...state,
        show: true
      });
    case CLOSE_RESULT_MODAL:
      return ({
        ...state,
        show: false
      });
    default:
      return state;
  }
}

export default searchReducer;