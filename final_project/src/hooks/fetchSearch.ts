import { PRODUCTS } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchSearchProducts = createAsyncThunk(
  "searchProducts/fetchSearchProducts",
  async (title: string) => {
    try {
      const url = `${PRODUCTS}/?title=${title}`;

      const { data }: AxiosResponse<ProductType[]> = await axios.get(url);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(`Axios error: ${e}`);
        throw new Error();
      } else {
        console.log(`Error in fetchSearchProducts: ${e}`);
        throw new Error();
      }
    }
  },
);

export { fetchSearchProducts };
