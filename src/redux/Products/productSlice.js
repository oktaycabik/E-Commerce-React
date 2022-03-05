import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async ([sortKey, brand, details, category,id]) => {
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
    const res = await axios(url);
   

    return res.data.products;
  }
);
export const getProduct = createAsyncThunk("product/getProduct", async (id) => {
  let url = `http://localhost:3001/api/product/${id}`;

  const res = await axios(url);

  return res.data.product;
});
export const addToUserFavorite = createAsyncThunk(
  "product/addToUserFavorite",
  async (id) => {
    const tokens1 = localStorage.getItem("access_token");
    const res = await axios(`http://localhost:3001/api/product/favori/${id}`, {
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
      `http://localhost:3001/api/product/undo_favori/${id}`,
      {
        headers: {
          Authorization: "Bearer: " + tokens1,
        },
      }
    );

    return res.data.product;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    cart: [],
    productDetails: {},
  },
  reducers: {},
  extraReducers: {
    [getProducts.fulfilled]: (state, action) => {
      state.product = action.payload;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.productDetails = action.payload;
    },
    [addToUserFavorite.fulfilled]: (state, action) => {
      const userId = localStorage.getItem("id");
      const { _id } = action.payload;
      const index = state.product.findIndex((a) => a._id === _id);
      state.product[index].favori.push(userId);
      console.log("addUser", action.payload);
    },

    [unToUserFavorite.fulfilled]: (state, action) => {
      console.log("undouser", action.payload);
      const userId = localStorage.getItem("id");
      const { _id } = action.payload;
      const index = state.product.findIndex((a) => a._id === _id);
      const index2 = state.product[index].favori.findIndex((a) => a === userId);
      state.product[index].favori.splice(index2, 1);
    },
  },
});
export default productSlice.reducer;
