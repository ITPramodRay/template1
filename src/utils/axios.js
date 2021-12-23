import axios from "axios";

const api = (url) =>
  axios.create({
    baseURL: url,
  });

export default api;
