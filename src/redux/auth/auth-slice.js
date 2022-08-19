import { createSlice } from "@reduxjs/toolkit";

import {
  signup,
  login,
  getCurrentUser,
  logout,
  createBalance,
} from "./auth-operations";

const initialState = {
  userData: {
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
      userData: { email: payload.email },
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
      token: payload.token,
      userData: { balance: payload.balance, email: payload.email },
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
      userData: { balance: payload.balance, email: payload.email },
    }),
    [getCurrentUser.rejected]: (store, { payload }) => ({
      ...initialState,
      error: payload,
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
      userData: { email: "" },
    }),
    [logout.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //---------
    // SET USER BALANCE
    [createBalance.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [createBalance.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      userData: { ...store.userData, balance: payload },
    }),
    [createBalance.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    //----------
  },
});

export default authSlice.reducer;
