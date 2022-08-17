import { createAsyncThunk } from "@reduxjs/toolkit";

import * as services from "../../shared/services/API";

// USER

export const signup = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.signup(data);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const user = await services.login(data);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { user } = getState();
      const { token } = user;
      const data = await services.getCurrent(token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState();
      if (!user.token) {
        return false;
      }
    },
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const user = await services.logout();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// BALANCE

export const createBalance = createAsyncThunk(
  "auth/createBalance",
  async (data, { rejectWithValue }) => {
    try {
      const balance = await services.setUserBalance(data);
      return balance;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
