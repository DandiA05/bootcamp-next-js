// Setup global state so it can be used accross entire apps
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers";

// Create store
export const store = configureStore({
  reducer: rootReducer,
});
