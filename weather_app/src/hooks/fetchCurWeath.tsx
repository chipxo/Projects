import { API_KEY, BASE_URL, CURRENT } from "@/api/api";
import { WeatherResponse } from "@/types/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchCurWeath = createAsyncThunk(
  "curWeath/fetchCurWeath",
  async (city: string) => {
    try {
      const url = `${BASE_URL}${CURRENT}${API_KEY}&q=${city}`;

      const { data }: AxiosResponse<WeatherResponse> = await axios.get(url);

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

export default fetchCurWeath;
