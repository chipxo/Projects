import { PRODUCTS } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  try {
    const url = PRODUCTS;

    const { data }: AxiosResponse<ProductType[]> = await axios.get(url);
    return data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.log(`Axios error: ${e}`);
      throw new Error();
    } else {
      console.log(`Error in fetchProducts: ${e}`);
      throw new Error();
    }
  }
});

export { fetchProducts };
