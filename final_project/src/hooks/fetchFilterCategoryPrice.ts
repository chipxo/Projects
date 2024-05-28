import { PRODUCTS } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

type FetchFilterCategoryPayload = {
  categoryId: string | null;
  lowestPr: number;
  highestPr: number;
};

export const fetchFilterCategoryPrice = createAsyncThunk<
  ProductType[],
  FetchFilterCategoryPayload
>(
  "categoryFilteredProducts/fetchFilterCategoryPrice",
  async ({ categoryId, lowestPr, highestPr }: FetchFilterCategoryPayload) => {
    try {
      const url = `${PRODUCTS}/?price_min=${lowestPr}&price_max=${highestPr}&categoryId=${categoryId}`;

      const { data }: AxiosResponse<ProductType[]> = await axios.get(url);
      return data;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        console.log(`Axios error: ${e}`);
        throw new Error();
      } else {
        console.log(`Error in fetchFilterCategoryPrice: ${e}`);
        throw new Error();
      }
    }
  },
);
