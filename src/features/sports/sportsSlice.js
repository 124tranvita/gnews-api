import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  articles: [],
  status: 'idle',
  error: null,
};

export const fetchSports = createAsyncThunk('sports/fetchSports', async ({ token, lang }, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://gnews.io/api/v4/search?q=sports&token=${token}&lang=${lang}`);
    return [...response.data.articles];
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const sportsSlice = createSlice({
  name: 'sports',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSports.pending, (state, pending) => {
        state.status = 'loading';
      })
      .addCase(fetchSports.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchSports.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default sportsSlice.reducer;
