import axios from "axios";

const api = (url,token) =>
  {console.log(token && `Bearer ${token}` )
  return axios.create({
    baseURL: url,
   
  });}

export default api;