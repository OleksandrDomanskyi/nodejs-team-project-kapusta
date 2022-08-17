import { createSlice } from "@reduxjs/toolkit";

import {
  createTransaction,
  fetchAllTransactions,
} from "./transactions-operations";

const initialState = {
  items: [
    // {
    //   id: 2,
    //   type: "expenses",
    //   date: "11.01.2011",
    //   description: "Beef",
    //   category: "food",
    //   sum: "450",
    // },
    // {
    //   id: 1,
    //   date: "21.01.2021",
    //   type: "expenses",
    //   description: "Salmon",
    //   category: "food",
    //   sum: "30031231",
    // },
    // {
    //   id: 3,
    //   date: "01.01.2001",
    //   type: "expenses",
    //   description: "Macallan",
    //   category: "drinks",
    //   sum: "18aweq500",
    // },
    // {
    //   id: 4,
    //   date: "21.01.2021",
    //   type: "expenses",
    //   description: "Salmon",
    //   category: "food",
    //   sum: "312310",
    // },
    // {
    //   id: 5,
    //   date: "01.01.2001",
    //   type: "income",
    //   description: "Macwadaallan",
    //   category: "drinks",
    //   sum: "18sefse41500",
    // },
    // {
    //   id: 6,
    //   date: "21.01.2021",
    //   type: "income",
    //   description: "Sal1231mon",
    //   category: "food",
    //   sum: "300",
    // },
    // {
    //   id: 7,
    //   date: "01.01.2001",
    //   type: "income",
    //   description: "Macalldadqan",
    //   category: "drinks",
    //   sum: "1851231e00",
    // },
    // {
    //   id: 11,
    //   date: "21.01.2021",
    //   type: "income",
    //   description: "Salmon",
    //   category: "food",
    //   sum: "300",
    // },
    // {
    //   id: 12,
    //   date: "01.01.2001",
    //   type: "income",
    //   description: "Macal41414lan",
    //   category: "drinks",
    //   sum: "181244500",
    // },
    // {
    //   id: 13,
    //   date: "11.01.2011",
    //   type: "income",
    //   description: "Borj41414omi",
    //   category: "drinks",
    //   sum: "44141450",
    // },
    // {
    //   id: 14,
    //   date: "21.01.2021",
    //   type: "expenses",
    //   description: "Sa44114lmon",
    //   category: "food",
    //   sum: "3414100",
    // },
    // {
    //   id: 15,
    //   date: "01.01.2001",
    //   type: "expenses",
    //   description: "Macallan",
    //   category: "drinks",
    //   sum: "18500",
    // },
    // {
    //   id: 16,
    //   type: "expenses",
    //   date: "11.01.2011",
    //   description: "Borjomi",
    //   category: "drinks",
    //   sum: "450",
    // },
    // {
    //   id: 17,
    //   type: "expenses",
    //   date: "21.01.2021",
    //   description: "Salmon",
    //   category: "food",
    //   sum: "300",
    // },
  ],
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
      items: payload,
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
  },
});

export default transactionsSlice.reducer;
