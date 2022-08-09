import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../shared/services/balance";

export const fetchBalance = createAsyncThunk(
  "balance/fetch",
  async (id, { rejectWithValue }) => {
    try {
      const data = await API.getBalance(id);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
