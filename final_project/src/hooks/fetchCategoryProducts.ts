import { CATEGORIES } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const fetchCategoryProducts = createAsyncThunk(
  "categoryProducts/fetchCategory",
  async (categoryId: string) => {
    try {
      const url = `${CATEGORIES}${categoryId}/products`;

      const { data }: AxiosResponse<ProductType[]> = await axios.get(url);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(`Axios error: ${e}`);
      } else {
        console.log(`Error in fetchCategoryProducts: ${e}`);
      }
    }
  },
);
