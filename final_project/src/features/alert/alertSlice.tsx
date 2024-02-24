import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  text: string | null;
  openAlert: boolean;
};

const initialState: InitialState = {
  text: null,
  openAlert: false,
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    makeAlert: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
      state.openAlert = true;
    },
    closeAlert: (state) => {
      state.openAlert = false;
    },
  },
});

export const { makeAlert, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
