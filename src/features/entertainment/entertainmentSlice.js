import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  articles: [],
  status: 'idle',
  error: null,
};

export const fetchEntertainment = createAsyncThunk(
  'entertainment/fetchEntertainment',
  async ({ token, lang }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://gnews.io/api/v4/search?q=entertainment&token=${token}&lang=${lang}`);
      return [...response.data.articles];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const entertainmentSlice = createSlice({
  name: 'entertainment',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchEntertainment.pending, (state, pending) => {
        state.status = 'loading';
      })
      .addCase(fetchEntertainment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchEntertainment.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default entertainmentSlice.reducer;
