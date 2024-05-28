import { PRODUCTS } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchAmountOfProducts = createAsyncThunk(
  "amountOfProducts/fetchAmountOfProducts",
  async (amount: number) => {
    try {
      const url = `${PRODUCTS}?offset=${amount}&limit=10`;

      const { data }: AxiosResponse<ProductType[]> = await axios.get(url);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(`Axios error: ${e}`);
      } else {
        console.log(`Error in fetchAmountOfProducts: ${e}`);
      }
    }
  },
);

export { fetchAmountOfProducts };
