import { combineReducers } from "@reduxjs/toolkit";
import curWeathReducer from "@/features/curWeath/curWeathSlice";
import forecastReducer from "@/features/forecats/forecastSlice";

const rootReducer = combineReducers({
  curWeath: curWeathReducer,
  forecast: forecastReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
