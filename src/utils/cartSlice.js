import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "card items",
  initialState: {
    items: [],
  },
  reducers:{
    addItems: (state ,action) => {
       const index = state.items.findIndex(
         (item) => item.id === action.payload.id
       );
       if (index === -1) {
         state.items.push({ ...action.payload, quantity: 1 });
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
        if (index !== -1) state.items[index].quantity++;
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
    clearCart: (state , action) => {
        state.items = [];
    }
  }

});

export const { addItems, removeItems, increment, decrement, clearCart } = cartSlice.actions;
export default cartSlice.reducer;