import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../shared/services/API';


export const getTransactionsPerPeriod = createAsyncThunk(
  'reports/getTransactionsPerPeriod',
  async (period, { rejectWithValue }) => {
    try {
      const data = await API.fetchTransactionsPerPeriod(period);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);