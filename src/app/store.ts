import { configureStore } from "@reduxjs/toolkit";
import toplineArticlesReducer from "../features/articles/toplineArticlesSlice";
import weatherReducer from "../features/weather/weatherSlice";
import globalSettingsReducer from "../features/globalSettings/globalSettingsSlice";
import entertainmentArticlesReducer from "../features/articles/entertainmentArticlesSlice";
import businessArticlesReducer from "../features/articles/businessArticlesSlice";
import travelArticlesReducer from "../features/articles/travelArticlesSlice";
import searchArticlesReducer from "../features/articles/searchArticlesSlice";

export const store = configureStore({
  reducer: {
    toplineArticles: toplineArticlesReducer,
    weather: weatherReducer,
    globalSettings: globalSettingsReducer,
    entertainmentArticles: entertainmentArticlesReducer,
    businessArticles: businessArticlesReducer,
    travelArticles: travelArticlesReducer,
    searchArticles: searchArticlesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
