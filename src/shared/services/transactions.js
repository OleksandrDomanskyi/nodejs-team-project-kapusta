import instance from "./auth";

export const createTransaction = async (data) => {
  try {
    const { response } = await instance.post("/api/transactions", {});
    return data;
  } catch (error) {
    console.log(error);
  }
};


// const { _id, balance } = req.user;
// const { type, category, value, year, month, day } = req.body;
