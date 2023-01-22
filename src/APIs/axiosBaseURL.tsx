import axios from "axios";

export default axios.create({
  baseURL: "https://firesms-messaging-platform.herokuapp.com",
});
