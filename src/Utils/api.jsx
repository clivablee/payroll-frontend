import axios from "axios";

const baseUrl = "https://payroll-server-alpha.vercel.app/v1/";
// const baseUrl = "http://localhost:5500/v1/";

const api = axios.create({
  baseURL: baseUrl,
});

export default api;
