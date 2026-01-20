import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],   // {id, title, price, quantity}
    totalQuantity: 0
  },
  reducers: {

    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        item => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.items.push({
          ...newItem,
          quantity: 1
        });
      } else {
        existingItem.quantity++;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(
        item => item.id === id
      );

      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          item => item.id !== id
        );
      } else {
        existingItem.quantity--;
      }
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
