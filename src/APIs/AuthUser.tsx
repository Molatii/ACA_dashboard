import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://firesms-messaging-platform.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosPublic;
