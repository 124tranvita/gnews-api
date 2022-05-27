import { configureStore } from '@reduxjs/toolkit';
import toplinesReducer from './toplines/toplinesSlice';
import politicsReducer from './politics/politicsSlice';
import sportsReducer from './sports/sportsSlice';
import entertainmentReducer from './entertainment/entertainmentSlice';
import latestReducer from './latest/latestSlice';
import settingsReducer from './settings/settingsSlice';
import searchReducer from './search/searchSlice';

const store = configureStore({
  reducer: {
    toplines: toplinesReducer,
    politics: politicsReducer,
    sports: sportsReducer,
    entertainment: entertainmentReducer,
    latest: latestReducer,
    search: searchReducer,
    settings: settingsReducer,
  },
});

export default store;
