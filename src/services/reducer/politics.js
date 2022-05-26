import { FETCH_POLITICS, FETCH_POLITICS_SUCCESS, FETCH_POLITICS_FAILED } from '../actions/constants';

const initState = {
  loading: false,
  articles: [],
  error: null,
};

const politicsReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_POLITICS:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POLITICS_SUCCESS:
      return {
        ...state,
        loading: false,
        articles: action.payload,
        error: null,
      };
    case FETCH_POLITICS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default politicsReducer;
