import { createAsyncThunk } from "@reduxjs/toolkit";
import { replaceCart } from "./cartSlice";

// SEND (PUT)
export const sendCartData = createAsyncThunk(
  "cart/sendCartData",
  async (cart) => {
    await fetch("YOUR_API_URL", {
      method: "PUT",
      body: JSON.stringify(cart)
    });
  }
);


// FETCH (GET)  ?? ADD THIS
export const fetchCartData = createAsyncThunk(
  "cart/fetchCartData",
  async () => {

    const res = await fetch("YOUR_API_URL");

    if (!res.ok) {
      throw new Error("Fetch failed");
    }

    const data = await res.json();

    return {
      items: data.items || [],
      totalQuantity: data.totalQuantity || 0
    };
  }
);
