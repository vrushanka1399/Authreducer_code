import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],   // {id, title, price, quantity}
    totalQuantity: 0,
    isVisible: false
  },
  reducers: {

    toggleCart(state) {
      state.isVisible = !state.isVisible;
    },

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
    },

    // ?? ADD THIS FOR GET API
    replaceCart(state, action) {
      state.items = action.payload.items || [];
      state.totalQuantity = action.payload.totalQuantity || 0;
    }
  }
});

export const { 
  addToCart, 
  removeFromCart,
  toggleCart,
  replaceCart       // ?? EXPORT
} = cartSlice.actions;

export default cartSlice.reducer;
