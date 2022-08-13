import { createSlice } from "@reduxjs/toolkit";

import { fetchBalance } from "./transactions-operations";

const initialState = {
  value: "5555",
  loading: false,
  error: null,
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  extraReducers: {
    [fetchBalance.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [fetchBalance.fulfilled]: (store, { payload }) => {
      store.loading = false;
      store.value = payload;
    },
    [fetchBalance.rejected]: (store, { payload }) => {
      store.loading = false;
      store.error = payload;
    },
  },
});

export default balanceSlice.reducer;
