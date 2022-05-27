import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  articles: [],
  status: 'idle',
  error: null,
};

export const fetchToplines = createAsyncThunk(
  'toplines/fetchToplines',
  async ({ token, lang }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://gnews.io/api/v4/top-headlines?token=${token}&lang=${lang}`);
      return [...response.data.articles];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const toplinesSlice = createSlice({
  name: 'toplines',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchToplines.pending, (state, pending) => {
        state.status = 'loading';
      })
      .addCase(fetchToplines.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
        state.error = null;
      })
      .addCase(fetchToplines.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default toplinesSlice.reducer;
