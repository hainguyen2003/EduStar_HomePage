import Cookies from "js-cookie";
import axios from "axios";
import { base_url } from "./baseURL";

const login_path = "/auth/login";
const public_paths = ["/course/registrationn"];

// Trước khi call API
axios.interceptors.request.use((req) => {
  // Nối 2 URL với nhau
  const jwt = Cookies.get("jwt");
  const newUrl = base_url + req.url;

  // Bỏ Authorization nếu là endpoint công khai
  const Authorization =
    public_paths.includes(req.url) || login_path === req.url
      ? undefined
      : `Bearer ${jwt}`;

  return {
    ...req,
    url: newUrl,
    headers: {
      ...req.headers,
      Authorization,
      "ngrok-skip-browser-warning": "1",
    },
  };
});

// Sau khi có response trả về
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
