import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  articles: [],
  status: 'idle',
  error: null,
};

export const fetchPolitics = createAsyncThunk(
  'politics/fetchPolitics',
  async ({ token, lang }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://gnews.io/api/v4/search?q=politics&token=${token}&lang=${lang}`);
      return [...response.data.articles];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const politicsSlice = createSlice({
  name: 'politics',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPolitics.pending, (state, pending) => {
        state.status = 'loading';
      })
      .addCase(fetchPolitics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
        state.error = null;
      })
      .addCase(fetchPolitics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default politicsSlice.reducer;
