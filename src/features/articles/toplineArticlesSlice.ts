import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "../../utils/utilsType";

type InitialState = {
  isLoading: boolean;
  articles: Article[];
  error: string;
};

const initialState: InitialState = {
  isLoading: false,
  articles: [],
  error: "",
};

export const fetchToplineArticles = createAsyncThunk(
  "toplineArticles/fetchToplineArticles",
  async ({ token, lang }: Record<string, string>) => {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?&lang=${lang}&token=${token}`
    );

    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    const data = await response.json();
    return data.articles as Article[];
  }
);

const toplineArticlesSlice = createSlice({
  name: "toplineArticles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchToplineArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchToplineArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
      state.error = "";
    });
    builder.addCase(fetchToplineArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.articles = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default toplineArticlesSlice.reducer;
