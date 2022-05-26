import { SET_TOKEN } from '../actions/constants';

const initState = '1c539d252c8d0a7349c82e59ba7012c7a';

const setTokenReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return (state = action.payload);
    default:
      return state;
  }
};

export default setTokenReducer;
