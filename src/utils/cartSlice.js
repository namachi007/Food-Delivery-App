import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index === -1) {
        state.items.push({
          ...action.payload,
          displayPrice: action.payload.displayPrice || 200, // Default price if undefined
          quantity: 1,
        });
      } else {
        state.items[index].quantity++;
      }
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increment: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index].quantity++;
      }
    },
    decrement: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity--;
        } else {
          state.items.splice(index, 1);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItems, removeItems, increment, decrement, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
