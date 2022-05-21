import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED } from "../actions/constants";

const initState = {
  loading: false,
  articles: [],
  error: null
}

const politicsReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default politicsReducer;