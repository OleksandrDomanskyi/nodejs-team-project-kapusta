import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTransactionsPerPeriod } from '../../shared/services/auth';


export const getTransactionsPerPeriod = createAsyncThunk(
  'transactions/getTransactionsPerPeriod',
  async (period, { rejectWithValue, dispatch }) => {
    try {
      const data = await fetchTransactionsPerPeriod(period);
      return data;
    } catch (error) {
      setTimeout(() => {
        dispatch(
          console.error()
          //need to refresh user and logout
        );
      }, 0);
      return rejectWithValue(error.message);
    }
  }
);