import { combineReducers } from "redux";
import { userReducer } from "./dataUser";
import { dataLoaderReducer } from "./dataLoader";

// Combine all states defined in each reducer folder
const rootReducer = combineReducers({
  userReducer,
  dataLoaderReducer,
});

export default rootReducer;
