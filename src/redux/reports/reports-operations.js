import { createAsyncThunk } from '@reduxjs/toolkit';
import * as API from '../../shared/services/API';


export const getTransactionsPerPeriod = createAsyncThunk(
  'transactions/getTransactionsPerPeriod',
  async (period, { rejectWithValue, dispatch }) => {
    try {
      const data = await API.fetchTransactionsPerPeriod(period);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(
          console.error()
        );
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);