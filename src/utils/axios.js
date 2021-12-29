import axios from "axios";

const api = (url,token) =>
  {console.log(token && `Bearer ${token}` )
  return axios.create({
    baseURL: url,
    'Authorization': token && `Bearer ${token}`
  });}

export default api;