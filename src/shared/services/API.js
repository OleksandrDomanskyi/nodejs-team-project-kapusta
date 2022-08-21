import axios from "axios";

const instance = axios.create({
  baseURL: "https://kapusta-net-app.herokuapp.com/api/",
  // baseURL: "http://localhost:3001/api",
});

// USER

const addToken = (token) => {
  instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const removeToken = () => {
  instance.defaults.headers.common.Authorization = "";
};

export const signup = async (body) => {
  const { data } = await instance.post("/users/register", body);
  console.log(data);
  return data;
};

export const login = async (body) => {
  const { data } = await instance.post("/users/login", body);
  addToken(data.token);
  return data;
};

export const getCurrent = async (token) => {
  addToken(token);
  try {
    const { data } = await instance.get("/users/current");
    return data;
  } catch (error) {
    removeToken();
    throw error;
  }
};

export const logout = async () => {
  const { data } = await instance.post("/users/logout");
  removeToken();
  return data;
};

// BALANCE

export const setUserBalance = async (balance) => {
  try {
    const { data } = await instance.patch("/users/balance", {
      balance,
    });
    return data.balance;
  } catch (error) {
    console.log(error);
  }
};

// TRANSACTION

export const fetchAllTransactions = async () => {
  try {
    const { data } = await instance.get("/transactions");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createTransaction = async (transaction) => {
  try {
    const { data } = await instance.post("/transactions", {
      transaction,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteTransaction = async ({ id }) => {
  try {
    const { data } = await instance.delete(`/transactions/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//used for reports
export const fetchTransactionsPerPeriod = async ( periodId ) => {
  const resp = await instance.get(`/transactions/period/${periodId}`);
  return resp.data;
};


export default instance;
