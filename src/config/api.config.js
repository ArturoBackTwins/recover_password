import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "http://localhost:4001",
});

export default axiosAPI;