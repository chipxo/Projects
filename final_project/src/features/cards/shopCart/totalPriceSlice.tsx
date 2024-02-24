import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Count = {
  count: number;
  price: number;
};

type InitialState = {
  counts: Record<number, Count>;
  totalPrice: number;
};

const initialState: InitialState = {
  counts: {},
  totalPrice: 0,
};

const totalPriceSlice = createSlice({
  name: "totalPrice",
  initialState,
  reducers: {
    setCounts: (state, action) => {
      state.counts = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload;
    },
    incTotalPrice: (
      state,
      action: PayloadAction<{ id: number; price: number }>,
    ) => {
      const { id, price } = action.payload;

      state.totalPrice += price;

      const updatedCount = (state.counts[id]?.count || 1) + 1;

      state.counts[id] = {
        ...state.counts[id],
        count: updatedCount,
        price: price * updatedCount,
      };
    },
    decTotalPrice: (
      state,
      action: PayloadAction<{ id: number; price: number }>,
    ) => {
      const { id, price } = action.payload;

      state.totalPrice -= price;

      const updatedCount = (state.counts[id]?.count || 2) - 1;

      state.counts[id] = {
        ...state.counts[id],
        count: updatedCount,
        price: price * updatedCount,
      };
    },
  },
});

export const { setTotalPrice, incTotalPrice, decTotalPrice, setCounts } =
  totalPriceSlice.actions;
export default totalPriceSlice.reducer;
