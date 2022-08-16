import { createSlice } from "@reduxjs/toolkit";

import { signup, login, getCurrentUser, logout } from "./auth-operations";

const initialState = {
  user: {
    email: "",
    balance: "",
  },
  token: "",
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    // ---Sign up
    [signup.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [signup.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      ...payload,
    }),
    [signup.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //----------
    // ---Login
    [login.pending]: (store, _) => ({ ...store, loading: true, error: null }),
    [login.fulfilled]: (store, { payload }) => ({
      ...store,
      isLogin: true,
      loading: false,
      ...payload,
    }),
    [login.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //----------------
    //----Get Current
    [getCurrentUser.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [getCurrentUser.fulfilled]: (store, { payload }) => ({
      ...store,
      isLogin: true,
      loading: false,
      ...payload,
    }),
    [getCurrentUser.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
      token: "",
    }),
    //----------
    //---Logout
    [logout.pending]: (store) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [logout.fulfilled]: (store, { payload }) => ({
      token: "",
      isLogin: false,
      loading: false,
      error: null,
    }),
    [logout.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //---------
  },
});

export default authSlice.reducer;
