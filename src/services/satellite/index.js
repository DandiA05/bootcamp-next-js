import axios from "axios";

console.log("Pro", process.env.NEXT_PUBLIC_HOST);
// Interceptors
const Satellite = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOST,
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
