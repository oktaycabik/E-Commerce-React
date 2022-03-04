import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
      
    },
    inraceQuantity: (state, action) => {
      state.items[action.payload].quantity+=1
        
      },
  },
});

export default cartSlice.reducer;
export const { addCart } = cartSlice.actions;
export const { inraceQuantity } = cartSlice.actions;