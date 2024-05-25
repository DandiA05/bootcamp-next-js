import axios from "axios";
import Satellite from "../satellite";
import { store } from "@/store/storage";
import { dataLoaderActions } from "@/store/reducers/dataLoader";
const { dispatch } = store;

// Function Call API
// URL: https://potterapi-fedeperin.vercel.app/en
// Endpoint: /books
// Method: GET

export const getBooks = async () => {
  try {
    dispatch(dataLoaderActions.setLoading(true));
    const response = await Satellite.get("/books");
    // const response = await axios({
    //   method: "get",
    //   url: "https://potterapi-fedeperin.vercel.app/en/books",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
    return response.data;
  } catch (e) {
    dispatch(dataLoaderActions.setError(true));
    console.log("Error", e.response);
    return e.response;
  } finally {
    setTimeout(() => dispatch(dataLoaderActions.setLoading(false)), 1000);
  }
};
