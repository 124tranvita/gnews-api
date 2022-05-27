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
  topic: 'world',
};

export const fetchLatest = createAsyncThunk(
  'latest/fetchLatest',
  async ({ token, lang, topic }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `https://gnews.io/api/v4/top-headlines?topic=${topic}&token=${token}&lang=${lang}&from=${yesterday.toISOString()}&to=${today.toISOString()}`,
      );
      return [...response.data.articles];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const latestSlice = createSlice({
  name: 'latest',
  initialState,
  reducers: {
    changeTopic: (state, action) => {
      state.topic = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchLatest.pending, (state, pending) => {
        state.status = 'loading';
      })
      .addCase(fetchLatest.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
        state.error = null;
      })
      .addCase(fetchLatest.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { changeTopic } = latestSlice.actions;

export default latestSlice.reducer;
