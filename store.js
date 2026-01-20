import { configureStore } from "@reduxjs/toolkit";  // ADD THIS
import cartReducer from "./cartSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer
  }
});


