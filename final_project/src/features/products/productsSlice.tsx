import { fetchProducts } from "@/hooks/fetchProducts";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  products: ProductType[] | undefined;
  loading: boolean;
  error: string | null | {};
};

const initialState: InitialStateType = {
  products: undefined,
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductType[] | undefined>) => {
          state.loading = false;
          state.products = action.payload;
          state.error = null;
        },
      )
      .addCase(
        fetchProducts.rejected,
        (state, action: PayloadAction<unknown, string>) => {
          state.loading = false;
          state.error = action.payload ?? "Fetch failed";
        },
      );
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
