import { createSlice } from "@reduxjs/toolkit";

import {
  createTransaction,
  fetchAllTransactions,
  deleteTransaction,
} from "./transactions-operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  extraReducers: {
    // fetchAllTransactions
    [fetchAllTransactions.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [fetchAllTransactions.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: payload.transactions,
    }),
    [fetchAllTransactions.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    // Create Transaction
    [createTransaction.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [createTransaction.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: payload.transactions,
    }),
    [createTransaction.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
    // Delete Transaction
    [deleteTransaction.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [deleteTransaction.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: payload.transactions,
    }),
    [deleteTransaction.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default transactionsSlice.reducer;
