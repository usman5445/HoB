import axios from "axios";
import { API_KEY, API_BASE_URL } from "../config/config";

// /axios global settings

axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Accept"] = "application/json";

const AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  key: API_KEY,
});

export default AxiosInstance;
