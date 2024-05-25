import axios from "axios";

// Interceptors
const Satellite = axios.create({
  baseURL: "https://potterapi-fedeperin.vercel.app/en",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default Satellite;
