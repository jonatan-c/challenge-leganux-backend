import axios from "axios";

const clientAxios = axios.create({
  // baseURL:  "http://localhost:3000",
  baseURL:  "http://localhost:3000",

});

export default clientAxios;