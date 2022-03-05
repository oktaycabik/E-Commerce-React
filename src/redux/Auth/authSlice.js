import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


export const login = createAsyncThunk("login/login", async (user) => {
  const res = await axios.post(`http://localhost:3001/api/auth/login`, user);

  return res.data;
});
export const register = createAsyncThunk("register/register", async (user) => {
  const res = await axios.post(`http://localhost:3001/api/auth/register`, user);

  return res.data;
});
export const logout = createAsyncThunk("logout/logout", async () => {
  const tokens1 = localStorage.getItem("access_token");
  const res = await axios(`http://localhost:3001/api/auth/user/logout`, {
    headers: {
      Authorization: "Bearer: " + tokens1,
    },
  });

  return res.data;
});
export const getProfileById = createAsyncThunk(
  "profile/getProfileById",
  async (id) => {
    const tokens1 = localStorage.getItem("access_token");
    const res = await axios(`http://localhost:3001/api/auth/${id}`, {
      headers: {
        Authorization: "Bearer: " + tokens1,
      },
    });

    return res.data.user;
  }
);
export const getUserOrder = createAsyncThunk(
  "order/getUserOrder",
  async (id) => {
    const tokens1 = localStorage.getItem("access_token");
    const res = await axios(`http://localhost:3001/api/order/${id}`, {
      headers: {
        Authorization: "Bearer: " + tokens1,
      },
    });

    return res.data.order;
  }
);
export const getProfile = createAsyncThunk("profiles/getProfile", async () => {
  const tokens1 = localStorage.getItem("access_token");
  const res = await axios(`http://localhost:3001/api/auth/user/profile`, {
    headers: {
      Authorization: "Bearer: " + tokens1,
    },
  });

  return res.data;
});
export const unToProductFavorite = createAsyncThunk("product/unToProductFavorite", async (id) => {
  const tokens1 = localStorage.getItem("access_token");
 await axios(`http://localhost:3001/api/auth/undo_favorites/${id}`, {
    headers: {
      Authorization: "Bearer: " + tokens1,
    },
  });

  return id;
});
export const addToProductFavorite = createAsyncThunk("product/addToProductFavorite", async (id) => {
  const tokens1 = localStorage.getItem("access_token");
   await axios(`http://localhost:3001/api/auth/favorites/${id}`, {
    headers: {
      Authorization: "Bearer: " + tokens1,
    },
  });

  return id;
});
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    profile: null,
    user2: null,
    order:[],
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      console.log('state.user', state.user)
    
      localStorage.setItem("access_token", action.payload.access_token);
      localStorage.setItem("id", action.payload.data.id);
    },
    [register.fulfilled]: (state, action) => {
      state.user = action.payload;
     console.log(action.payload)
    },
    [logout.fulfilled]: (state, action) => {
      state.user = null;
      console.log(action.payload);
      localStorage.removeItem("access_token");
      localStorage.removeItem("id");
    },
    [getProfileById.fulfilled]: (state, action) => {
      state.profile = action.payload;
    },
    [getProfile.fulfilled]: (state, action) => {
      state.user2 = action.payload;
      console.log(action.payload);
    },
    [addToProductFavorite.fulfilled]: (state, action) => {
      console.log("addprod",action.payload)
       state.profile.favorites.push({_id:action.payload})
    },
    [unToProductFavorite.fulfilled]: (state, action) => {
     const index=  state.profile.favorites.findIndex(a=>a._id===action.payload)
     state.profile.favorites.splice(index,1)
      console.log("undopro",action.payload)
     
    },
    [getUserOrder.fulfilled]: (state, action) => {
      console.log("addprod",action.payload)
       state.order=action.payload
    },
  },
});
export default authSlice.reducer;
