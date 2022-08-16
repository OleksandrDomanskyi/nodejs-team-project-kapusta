import { createAsyncThunk } from "@reduxjs/toolkit";

import * as API from "../../shared/services/auth";

export const createTransaction = createAsyncThunk(
  "transactions/createTransaction",
  async (data, { rejectWithValue }) => {
    try {
      const result = await API.createTransaction(data);
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
