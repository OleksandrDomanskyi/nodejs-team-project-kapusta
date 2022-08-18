import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsPerPeriod } from "./reports-operations";

const reportsSlice = createSlice({
  name: 'reports',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [getTransactionsPerPeriod.pending]: (store, _) => ({
      ...store,
      loading: true,
      error: null,
    }),
    [getTransactionsPerPeriod.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      items: payload.result,
    }),
    [getTransactionsPerPeriod.rejected]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: payload,
    }),
  },
});

export default reportsSlice.reducer;