import { fetchSearchProducts } from "@/hooks/fetchSearch";
import { ProductType } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  inputValue: string;
  products: ProductType[] | undefined;
  loading: boolean;
  error: string | null | {};
};

const initialState: InitialState = {
  inputValue: "",
  products: undefined,
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "searchProducts",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchSearchProducts.fulfilled,
        (state, action: PayloadAction<ProductType[] | undefined>) => {
          state.loading = false;
          state.products = action.payload;
          state.error = null;
        },
      )
      .addCase(
        fetchSearchProducts.rejected,
        (state, action: PayloadAction<unknown, string>) => {
          state.loading = false;
          state.error = action.payload ?? "Fetch failed";
        },
      );
  },
});

export const { setInputValue } = searchSlice.actions;

export default searchSlice.reducer;
