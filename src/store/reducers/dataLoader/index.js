import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
};

const dataLoaderSlice = createSlice({
  name: "dataLoader",
  initialState,
  reducers: {
    isFetchRunning: (_, action) => ({
      isFetching: action.payload,
    }),
  },
});

export const dataLoaderReducer = dataLoaderSlice.reducer;
export const dataLoaderActions = dataLoaderSlice.actions;
