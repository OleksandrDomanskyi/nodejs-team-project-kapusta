import axios from "axios";

const instance = axios.create({
    baseURL: "https://kapusta-net-app.herokuapp.com/"
});

export default instance;