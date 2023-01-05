import axios from "axios";

const baseURL = process.env.VUE_APP_API;
console.log(baseURL);
const api = axios.create({
  baseURL,
  headers: {
    accept: "application/json",
  },
});

export default api;
