// import instance from "./auth";
// import axios from "axios";

// export const getBalance = async (id) => {
//   console.log(id);
//   try {
//     const { data } = await instance.get("/api/balance", {
//       data: {
//         userId: id,
//       },
//     });
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getBalance = async (id) => {
  //   console.log(id);
  try {
    const data = {
      userId: id,
    };
    // const { data } = await axios.get(
    //   "https://kapusta-net-app.herokuapp.com/api/balance",
    //   {
    //     body: {
    //       userId: id,
    //     },
    //   }
    // );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

// export const getBalance = async () => {
//   try {
//     const data1 = {
//       email: "test.gmail.com",
//       password: "1111111",
//     };
//     const { data } = await instance.get("/api/users/register", data1);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
