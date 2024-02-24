import { User } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Error = {
  message: string;
  statusCode: number;
};

type InitialState = {
  alreadyRegistered: boolean;
  signedIn: boolean;
  openForm: boolean;
  openUserPanel: boolean;
  data: User | null;
  loading: boolean;
  error: {} | Error | null;
};

const initialState: InitialState = {
  alreadyRegistered: true,
  signedIn: false,
  openForm: false,
  openUserPanel: false,
  data: null,
  loading: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setRegistered: (state, action: PayloadAction<boolean>) => {
      state.alreadyRegistered = action.payload;
    },
    setSignedIn: (state, action: PayloadAction<boolean>) => {
      state.signedIn = action.payload;
    },
    showForm: (state) => {
      state.openForm = true;
    },
    closeForm: (state) => {
      state.openForm = false;
    },
    showUserPanel: (state) => {
      state.openUserPanel = true;
    },
    closeUserPanel: (state) => {
      state.openUserPanel = false;
    },
  },
});

export const {
  setRegistered,
  setSignedIn,
  showUserPanel,
  closeUserPanel,
  showForm,
  closeForm,
} = registerSlice.actions;

export default registerSlice.reducer;
