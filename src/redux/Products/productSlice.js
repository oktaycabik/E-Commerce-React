import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getProducts = createAsyncThunk(
  "product/getProducts",
  async ([sortKey, brand, details, category,id,bos]) => {
    let url = `https://e-cabik.herokuapp.com/api/product`;
    if (sortKey) {
      url += "?sortBy=" + sortKey;
    }
    if (brand) {
      url += "&brand=" + brand;
    }
    if (details) {
      url += "&details=" + details;
    }
    if (category) {
      url += "&category=" + category;
    }
    if (id) {
      url += "&category=" + id;
    }
     if(bos){
     return url+=bos
    }
    const res = await axios(url);
   
         console.log('url', url)
    return res.data.products;
  }
);
export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  let url = `${process.env.REACT_APP_URL}/product/${id}`;

  const res = await axios(url);

  return res.data.product;
});
export const addToUserFavorite = createAsyncThunk(
  "product/addToUserFavorite",
  async (id) => {
    const tokens1 = localStorage.getItem("access_token");
    const res = await axios(`${process.env.REACT_APP_URL}/product/favori/${id}`, {
      headers: {
        Authorization: "Bearer: " + tokens1,
      },
    });

    return res.data.product;
  }
);

export const unToUserFavorite = createAsyncThunk(
  "product/unToUserFavorite",
  async (id) => {
    const tokens1 = localStorage.getItem("access_token");
    const res = await axios(
      `${process.env.REACT_APP_URL}/product/undo_favori/${id}`,
      {
        headers: {
          Authorization: "Bearer: " + tokens1,
        },
      }
    );

    return res.data.product;
  }
);
export const newOrder = createAsyncThunk(
  "order/newOrder",
  async (input) => {
    const tokens1 = localStorage.getItem("access_token");
    const res = await axios.post(`${process.env.REACT_APP_URL}/order/neworder`,input, {
      headers: {
        Authorization: "Bearer: " + tokens1,
      },
    });

    return res.data.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    cart: [],
    productDetails: {},
    loading:false,
  },
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loading=false
    },
    [getProducts.pending]: (state, action) => {
     
      state.loading=true
    },
    [newOrder.fulfilled]: (state, action) => {
     
      console.log('action.payload', action.payload)
    },
    [getProduct.fulfilled]: (state, action) => {
      state.productDetails = action.payload;
    },
    [addToUserFavorite.fulfilled]: (state, action) => {
      const userId = localStorage.getItem("id");
      const { _id } = action.payload;
      const index = state.product.findIndex((a) => a._id === _id);
      state.product[index].favori.push(userId);
     
    },

    [unToUserFavorite.fulfilled]: (state, action) => {
     
      const userId = localStorage.getItem("id");
      const { _id } = action.payload;
      const index = state.product.findIndex((a) => a._id === _id);
      const index2 = state.product[index].favori.findIndex((a) => a === userId);
      state.product[index].favori.splice(index2, 1);
    },
  },
});
export default productSlice.reducer;
