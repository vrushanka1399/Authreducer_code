import { createSlice } from "@reduxjs/toolkit";

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    items: []
  },
  reducers: {
    addExpense(state, action) {
      state.items.push(action.payload);
    },
    setExpenses(state, action) {
      state.items = action.payload;
    }
  }
});

export const { addExpense, setExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
