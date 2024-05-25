import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
  isLoading: false,
  isError: false,
};

const dataLoaderSlice = createSlice({
  name: "dataLoader",
  initialState,
  reducers: {
    setLoading: (_, action) => ({
      isLoading: action.payload,
    }),
    setError: (_, action) => ({
      isError: action.payload,
    }),
    clear: () => ({ ...initialState }),
  },
});

export const dataLoaderActions = dataLoaderSlice.actions;
export const dataLoaderReducer = dataLoaderSlice.reducer;
