import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: 'c539d252c8d0a7349c82e59ba7012c7a',
  lang: 'en',
};

const settingsSlice = createSlice({
  name: 'toplines',
  initialState,
  reducers: {
    changeToken: (state, action) => {
      state.token = action.payload;
    },
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeToken, changeLang } = settingsSlice.actions;

export default settingsSlice.reducer;
