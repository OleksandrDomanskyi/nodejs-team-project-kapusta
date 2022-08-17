import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../shared/services/API";

export const fetchAllTransactions = createAsyncThunk(
  "transactions/fetchAllStransactions",
  async (_, { rejectWithValue }) => {
    try {
      const result = await API.fetchAllTransactions();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createTransaction = createAsyncThunk(
  "transactions/createTransaction",
  async (transaction, { rejectWithValue }) => {
    try {
      await API.createTransaction(transaction);
      const result = await API.fetchAllTransactions();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// export const fetchBalance = createAsyncThunk(
//   "transactions/getBalance",
//   async (id, { rejectWithValue }) => {
//     try {
//       const data = await API.getUserBalance(id);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
