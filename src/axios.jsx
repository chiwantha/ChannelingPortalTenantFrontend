import axios from "axios";

export const makeRequest = axios.create({
  // baseURL: "https://api.kchord.com/server",
  baseURL: "http://192.168.8.101:8800/server",
  headers: {
    "k-chord-api-key": "kchord_7c1f4b6e2d5a45ffaf9a8f0e4bdc3c17",
  },
  withCredentials: true,
});
