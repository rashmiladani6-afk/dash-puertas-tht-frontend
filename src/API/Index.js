import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // demo endpoint
});

export default API;
