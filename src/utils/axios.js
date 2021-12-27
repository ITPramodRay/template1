import axios from "axios";

const api = (url,token) =>
  axios.create({
    baseURL: url,
    header:{
      Authorization: token && `Bearer ${token}` 
    }
  });

export default api;