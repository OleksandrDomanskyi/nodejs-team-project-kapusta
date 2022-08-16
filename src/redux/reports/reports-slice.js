import { createSlice } from '@reduxjs/toolkit';
import { getTransactionsPerPeriod } from './reportsOperations';

const reportsSlice = createSlice({
  name: 'reports',
  initialState: {
    expenses: {
      expenseTotal: 0,
      expensesData: {},
    },
    incomes: {
      incomeTotal: 0,
      incomesData: {},
    },
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getTransactionsPerPeriod.pending](state) {
      state.loading = true;
    },
    [getTransactionsPerPeriod.fulfilled](state, action) {
      state.loading = false;
      // if (action.payload) {
      state.expenses.expenseTotal = action.payload.expenses.expenseTotal;
      state.expenses.expensesData = action.payload.expenses.expensesData;
      state.incomes.incomeTotal = action.payload.incomes.incomeTotal;
      state.incomes.incomesData = action.payload.incomes.incomesData;
      // }
    },
    [getTransactionsPerPeriod.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default reportsSlice.reducer;