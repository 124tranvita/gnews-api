import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  token: string;
  lang: string;
}

const initialState: InitialState = {
  token: "c539d252c8d0a7349c82e59ba7012c7a",
  lang: "en",
};

const globalSettingsSlice = createSlice({
  name: "globalSettings",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLang: (state, action: PayloadAction<string>) => {
      state.lang = action.payload;
    },
  },
});

export const { setToken, setLang } = globalSettingsSlice.actions;

export default globalSettingsSlice.reducer;
