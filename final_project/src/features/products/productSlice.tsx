import { fetchProduct } from "@/hooks/fetchProduct";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  product: ProductType | undefined;
  loading: boolean;
  error: string | null | {};
};

const initialState: InitialStateType = {
  product: undefined,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<ProductType | undefined>) => {
          state.loading = false;
          state.error = null;
          state.product = action.payload;
        },
      )
      .addCase(
        fetchProduct.rejected,
        (state, action: PayloadAction<unknown, string>) => {
          state.loading = false;
          state.error = action.payload ?? "Fetch failed";
        },
      );
  },
});

export default productSlice.reducer;
