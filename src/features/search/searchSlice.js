import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Declare yesterday and today
const today = new Date();
const yesterday = new Date(today);

yesterday.setDate(yesterday.getDate() - 1);

const initialState = {
  articles: [],
  status: 'idle',
  error: null,
  show: false,
};

export const fetchSearch = createAsyncThunk(
  'search/fetchSearch',
  async ({ token, lang, keyword, from, to }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/search?q=${keyword}&token=${token}&lang=${lang}&from=${from}T00:00:00Z&to=${to}T00:00:00Z`,
      );
      return [...response.data.articles];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    closeResultModal: (state) => {
      state.show = false;
    },
    showResultModal: (state) => {
      state.show = true;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearch.pending, (state, pending) => {
        state.status = 'loading';
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { closeResultModal, showResultModal } = searchSlice.actions;

export default searchSlice.reducer;
