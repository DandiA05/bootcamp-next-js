import { combineReducers } from "redux";
import { userReducer } from "./dataUser";

// Combine all states defined in each reducer folder
const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
