import { CATEGORIES } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const url = CATEGORIES;

      const { data }: AxiosResponse<CategoriesType[]> = await axios.get(url);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(`Axios error: ${e}`);
      } else {
        console.log(`Error in fetchCategories: ${e}`);
      }
    }
  },
);
