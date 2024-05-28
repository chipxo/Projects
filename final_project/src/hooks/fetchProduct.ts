import { PRODUCTS } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchProduct = createAsyncThunk(
  "products/fetchProduct",
  async (prodId: number) => {
    try {
      const url = `${PRODUCTS}/${prodId}`;

      const { data }: AxiosResponse<ProductType> = await axios.get(url);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(`Axios error: ${e}`);
        throw new Error();
      } else {
        console.log(`Error in fetchProduct: ${e}`);
        throw new Error();
      }
    }
  },
);

export { fetchProduct };
