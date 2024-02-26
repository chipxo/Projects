import { fetchCategories } from "@/hooks/fetchCategories";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  categories: CategoriesType[] | undefined;
  loading: boolean;
  error: string | null | {};
};

const initialState: InitialStateType = {
  categories: undefined,
  loading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchCategories.fulfilled,
        (state, action: PayloadAction<CategoriesType[] | undefined>) => {
          state.loading = false;
          state.categories = action.payload as CategoriesType[];
          state.error = null;
        },
      )
      .addCase(
        fetchCategories.rejected,
        (state, action: PayloadAction<unknown, string>) => {
          state.loading = false;
          state.error = action.payload ?? "fetch failed";
        },
      );
  },
});

export default categoriesSlice.reducer;
