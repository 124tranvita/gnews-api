import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import toplineReducer from "./topline";
import politicsReducer from "./politics";
import sportsReducer from "./sports";
import entertainmentReducer from "./entertainment";
import latestReducer from "./latest";
import changeLangReducer from "./language";
import searchReducer from "./search";

const store = createStore(
  combineReducers({
    topline: toplineReducer,
    politics: politicsReducer,
    sports: sportsReducer,
    entertainment: entertainmentReducer,
    latest: latestReducer,
    search: searchReducer,
    lang: changeLangReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
