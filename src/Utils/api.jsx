import axios from "axios";

const baseUrl = "http://localhost:5500/v1/";

const api = axios.create({
    baseURL: baseUrl,
    
});

export default api;