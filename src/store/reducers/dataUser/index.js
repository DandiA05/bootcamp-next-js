// Setup state untuk data user
import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  email: "",
  username: "",
  tokenSession: "",
  timestamp: null,
};

// Create state data user
const dataUserSlice = createSlice({
  name: "dataUser",
  initialState,
  reducers: {
    setDataUser: (_, action) => ({
      ...action.payload,
    }),
    clear: () => ({ ...initialState }),
  },
});

export const userReducer = dataUserSlice.reducer;
export const userActions = dataUserSlice.actions;
