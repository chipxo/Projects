import fetchCurWeath from "@/hooks/fetchCurWeath";
import { WeatherResponse } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  weather: WeatherResponse | undefined;
  city: string;
  loading: boolean;
  error: string | null | {};
};

const initialState: InitialState = {
  weather: undefined,
  city: "",
  loading: false,
  error: {},
};

const curWeathSlice = createSlice({
  name: "curWeath",
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurWeath.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCurWeath.fulfilled,
        (state, action: PayloadAction<WeatherResponse | undefined>) => {
          state.loading = false;
          state.error = null;
          state.weather = action.payload;
        },
      )
      .addCase(
        fetchCurWeath.rejected,
        (state, action: PayloadAction<unknown, string>) => {
          state.loading = false;
          state.error = action.payload ?? "Fetch failed";
        },
      );
  },
});

export const { setCity } = curWeathSlice.actions;

export default curWeathSlice.reducer;
