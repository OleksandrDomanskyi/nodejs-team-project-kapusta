import axios from "axios";

const instance = axios.create({
    baseURL: "https://dashboard.heroku.com/apps/kapusta-net-app/deploy/github"
});

export default instance;