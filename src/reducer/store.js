import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import toplineReducer from "./topline";
import politicsReducer from "./politics";

const store = createStore(
  combineReducers({
    topline: toplineReducer,
    politics: politicsReducer
  }),
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;