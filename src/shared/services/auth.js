import axios from "axios";

const instance = axios.create({
  //   baseURL: "https://kapusta-net-app.herokuapp.com/api/",
  baseURL: "http://localhost:3001/api",
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjc4NmYxYTFiZTdkNzMzM2M3MGU5MyIsImlhdCI6MTY2MDM4OTEzNiwiZXhwIjoxNjYwMzkyNzM2fQ.lPzgNJUGHI0Lf15hLOL02nxrX1n3_wb08JIWC_PJk60",
  },
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  //   },
});

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
//used for reports
export const fetchTransactionsPerPeriod = async period => {
  const resp = await axios.get('/transaction/period-data?date=' + period);
  return resp.data;
};

export default instance;
