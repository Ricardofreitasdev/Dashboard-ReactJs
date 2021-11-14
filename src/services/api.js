import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-dashboard-api.herokuapp.com/api",
});

export default api;