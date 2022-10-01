import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Weather } from "../../utils/utilsType";

type InitialState = {
  loading: boolean;
  weather: Weather;
  error: string;
};
const initialState: InitialState = {
  loading: false,
  weather: {},
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchWeatherInfo = createAsyncThunk(
  "weather/fetchWeatherInfo",
  // Declare the type your function argument here:
  async () => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=1.2894&longitude=103.8500&hourly=temperature_2m&current_weather=true&timezone=Asia%2FSingapore`
    );
    // Inferred return type: Promise<MyData>
    return (await response.json()) as Weather;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherInfo.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.weather = action.payload;
      state.error = "";
    });
    builder.addCase(fetchWeatherInfo.rejected, (state, action) => {
      state.loading = false;
      state.weather = {};
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default weatherSlice.reducer;
