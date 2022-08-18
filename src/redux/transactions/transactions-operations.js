import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../shared/services/API";

export const fetchAllTransactions = createAsyncThunk(
  "transactions/fetchAllTransactions",
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

export const deleteTransaction = createAsyncThunk(
  "transactions/deleteTransaction",
  async (id, { rejectWithValue }) => {
    try {
      await API.deleteTransaction({ id });
      const result = await API.fetchAllTransactions();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
