import { createSlice } from "@reduxjs/toolkit";
import { sendCartData } from "./cart-actions";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null
  },
  reducers: {},

  extraReducers: (builder) => {
    builder

      // pending
      .addCase(sendCartData.pending, (state) => {
        state.notification = {
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!"
        };
      })

      // fulfilled
      .addCase(sendCartData.fulfilled, (state) => {
        state.notification = {
          status: "success",
          title: "Success",
          message: "Cart data sent successfully!"
        };
      })

      // rejected
      .addCase(sendCartData.rejected, (state, action) => {
        state.notification = {
          status: "error",
          title: "Error",
          message: action.payload
        };
      });
  }
});

export default uiSlice.reducer;
