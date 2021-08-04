import axios from "axios"

const api_service = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export default api_service;