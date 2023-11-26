import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "44bf298e078c463aa214e29d04d7e545",
  },
});
