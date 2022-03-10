import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    newCart:[]
  },
  reducers: {
    addCart: (state, action) => {
      state.items.push(action.payload);
      
    },
    addCartOrder: (state, action) => {
      
      state.newCart.push(action.payload);
    },
    inraceQuantity: (state, action) => {
      state.items[action.payload].quantity+=1
        
      },
      inraceQuantity2: (state, action) => {
        state.newCart[action.payload].quantity+=1
          
        },
  },
});

export default cartSlice.reducer;
export const { addCart } = cartSlice.actions;
export const { inraceQuantity } = cartSlice.actions;
export const { addCartOrder } = cartSlice.actions;
export const { inraceQuantity2 } = cartSlice.actions;