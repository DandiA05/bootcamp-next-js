import Satellite from "@/services/satellite";
import { store } from "@/store/storage";
import { dataLoaderActions } from "@/store/reducers/dataLoader";
const { dispatch } = store;

export const getAllBooks = async () => {
  try {
    dispatch(dataLoaderActions.isFetchRunning(true));
    const response = await Satellite.get("/books");
    return {
      status: "success",
      data: response.data,
    };
  } catch (err) {
    console.log("Error:", err.response);
    return {
      status: "error",
      message: err.response,
      data: [],
    };
  } finally {
    setTimeout(() => dispatch(dataLoaderActions.isFetchRunning(false)), 2000);
  }
};
