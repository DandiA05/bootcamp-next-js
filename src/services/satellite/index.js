import axios from "axios";

// Interceptors
const Satellite = axios.create({
  baseURL: "https://dev-api-hostproject.web.app/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-Frame-Options": "deny",
    "X-Content-Type-Options": "nosniff",
    "X-XSS-Protection": "1; mode=block",
  },
});

export default Satellite;
