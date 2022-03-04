import {configureStore} from "@reduxjs/toolkit" 
import authSlice from "./Auth/authSlice"
import productSlice from "./Products/productSlice"
import cartSlice from "./Cart/cartSlice"
export const store =configureStore({
    reducer:{
        item:productSlice,
        user:authSlice,
        cart:cartSlice,
    }
})