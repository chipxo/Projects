import { fetchAmountOfProducts } from "@/hooks/fetchAmountOfProducts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  products: ProductType[] | undefined;
  loading: boolean;
  error: string | null | {};
};

const initialState: InitialStateType = {
  products: [],
  loading: false,
  error: null,
};

const amountOfProductsSlice = createSlice({
  name: "amountOfProducts",
  initialState,
  reducers: {
    delAmountOfProducts: (state) => {
      state.products = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAmountOfProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchAmountOfProducts.fulfilled,
        (state, action: PayloadAction<ProductType[] | undefined>) => {
          state.loading = false;
          state.products = state.products
            ? [...state.products, ...(action.payload as ProductType[])]
            : action.payload;
          state.error = null;
        },
      )
      .addCase(
        fetchAmountOfProducts.rejected,
        (state, action: PayloadAction<unknown, string>) => {
          state.loading = false;
          state.error = action.payload || "Fetch failed";
        },
      );
  },
});

export const { delAmountOfProducts } = amountOfProductsSlice.actions;

export default amountOfProductsSlice.reducer;
