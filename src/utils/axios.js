import axios from "axios";

const api = (url) =>
  axios.create({
    baseURL: url !== undefined ? url : process.env.REACT_APP_AXIOSBASE_URL,
  });

export default api;
