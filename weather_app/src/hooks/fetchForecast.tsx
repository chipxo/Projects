import { API_KEY, BASE_URL, DAYS5, FORECAST } from "@/api/api";
import { Forecast } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchForecast = createAsyncThunk(
  "forecast/fetchForecast",
  async (city: string) => {
    try {
      const url = `${BASE_URL}${FORECAST}${API_KEY}&q=${city}${DAYS5}`;

      const { data }: AxiosResponse<Forecast> = await axios.get(url);

      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(`Axios error: ${e}`);
      } else {
        console.log(e);
        throw new Error("Fetch failed");
      }
    }
  },
);

export default fetchForecast;
