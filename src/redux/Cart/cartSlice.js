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
        setCart: (state, action) => {
          state.items=action.payload
          
        },
        remevoCart: (state, action) => {
         const filter= state.items.filter(a=>a.product._id!==action.payload)
          state.items=filter
        },
        incQuantity: (state, action) => {
          const index=state.items.findIndex(a=>a.product._id===action.payload)
          state.items[index].quantity+=1
          
        },
        decQuantity: (state, action) => {
          const index=state.items.findIndex(a=>a.product._id===action.payload)
          if(state.items[index].quantity!==1)
          state.items[index].quantity-=1
          
        },
  },
});

export default cartSlice.reducer;
export const { addCart } = cartSlice.actions;
export const { inraceQuantity } = cartSlice.actions;
export const { addCartOrder } = cartSlice.actions;
export const { inraceQuantity2 } = cartSlice.actions;
export const { setCart } = cartSlice.actions;
export const { remevoCart } = cartSlice.actions;
export const { incQuantity } = cartSlice.actions;
export const { decQuantity } = cartSlice.actions;