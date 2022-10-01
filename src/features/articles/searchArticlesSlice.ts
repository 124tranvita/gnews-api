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

export const fetchSearchArticles = createAsyncThunk(
  "searchArticles/fetchSearchArticles",
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

const searchArticlesSlice = createSlice({
  name: "searchArticles",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchSearchArticles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchSearchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.articles = action.payload;
      state.error = "";
    });
    builder.addCase(fetchSearchArticles.rejected, (state, action) => {
      state.isLoading = false;
      state.articles = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default searchArticlesSlice.reducer;
