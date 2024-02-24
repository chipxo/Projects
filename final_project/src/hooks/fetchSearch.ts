import { ProductType } from "@/types/types.tsx";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchSearchProducts = createAsyncThunk(
  "searchProducts/fetchSearchProducts",
  async (title: string) => {
    try {
      const url = `https://api.escuelajs.co/api/v1/products/?title=${title}`;

      const { data }: AxiosResponse<ProductType[]> = await axios.get(url);
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

export { fetchSearchProducts };
