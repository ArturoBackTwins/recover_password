import axios from "axios";

const axiosAPI = axios.create({
    baseURL: "https://apidev.twinsfarm.app",
});

export default axiosAPI;