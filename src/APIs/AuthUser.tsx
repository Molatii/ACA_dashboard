import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "COMPANY_Base_URL_REMOVED",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosPublic;
