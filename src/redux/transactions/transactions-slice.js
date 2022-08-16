import { createSlice } from "@reduxjs/toolkit";

import { createTransaction } from "./transactions-operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
    // Create Transaction
    [createTransaction.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [createTransaction.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      ...payload,
    }),
    [createTransaction.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default transactionsSlice.reducer;
