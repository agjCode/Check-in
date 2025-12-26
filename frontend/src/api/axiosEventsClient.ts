import axios from "axios";

const axiosEventsClient = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosEventsClient.interceptors.response.use(
    (response) => {
        const codes = response.data.codes;
        response.data = codes.split(",")
          .map((code: string) => code.trim());
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosEventsClient;