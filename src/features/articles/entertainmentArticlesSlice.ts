import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../../utils/utilsType";

type InitialState = {
  isLoading: boolean;
  articles: Article[];
  error: string;
  keyword: string;
};

const initialState: InitialState = {
  isLoading: false,
  articles: [],
  error: "",
  keyword: "entertainment",
};

export const fetchEntertainmentArticles = createAsyncThunk(
  "entertainmentArticles/fetchEntertainmentArticles",
  async ({ token, lang, keyword }: Record<string, string>) => {
    const response = await fetch(
      `https://gnews.io/api/v4/search?lang=${lang}&token=${token}&q=${keyword}`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();
    return data.articles as Article[];
  }
);

const entertainmentArticlesSlice = createSlice({
  name: "entertainmentArticles",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchEntertainmentArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchEntertainmentArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
      state.error = "";
    });
    builder.addCase(fetchEntertainmentArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.articles = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export const { setKeyword } = entertainmentArticlesSlice.actions;

export default entertainmentArticlesSlice.reducer;
