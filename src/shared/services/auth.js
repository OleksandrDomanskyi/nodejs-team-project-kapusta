import axios from "axios";

const instance = axios.create({
  // baseURL: "https://kapusta-net-app.herokuapp.com/api/",
  baseURL: "http://localhost:3001/api",
  // headers: {
  //   authorization:
  //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZmE4YWIxZjIwZGNlYjBlYjk0YWQxNyIsImlhdCI6MTY2MDY2MDY4NywiZXhwIjoxNjYwNjY0Mjg3fQ.VY7SonSZzJkbYXv46qdl06YAWRDCvyZzqs6AGjIq3xM",
  // },
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  //   },
});

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
  const { data } = await instance.get("/users/logout");
  removeToken();
  return data;
};

export const getUserBalance = async () => {
  try {
    const { data } = await instance.get("/users/current");
    return data.balance;
  } catch (error) {
    console.log(error);
  }
};

export const setUserBalance = async (balance = 1000) => {
  try {
    const { data } = await instance.patch("/users/balance", {
      balance,
    });
    return data.balance;
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
//used for reports
export const fetchTransactionsPerPeriod = async (period) => {
  const resp = await axios.get("/transaction/period-data?date=" + period);
  return resp.data;
};

export default instance;
