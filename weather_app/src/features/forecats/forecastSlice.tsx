import fetchForecast from "@/hooks/fetchForecast";
import { Forecast } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  forecast: Forecast | undefined;
  loading: boolean;
  error: string | null | {};
};

const initialState: InitialState = {
  forecast: undefined,
  loading: false,
  error: {},
};

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForecast.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchForecast.fulfilled,
        (state, action: PayloadAction<Forecast | undefined>) => {
          state.loading = false;
          state.error = null;
          state.forecast = action.payload;
        },
      )
      .addCase(
        fetchForecast.rejected,
        (state, action: PayloadAction<unknown, string>) => {
          state.loading = false;
          state.error = action.payload ?? "Fetch failed";
        },
      );
  },
});

export const {} = forecastSlice.actions;

export default forecastSlice.reducer;
