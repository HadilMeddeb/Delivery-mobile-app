import { combineReducers } from "redux";
import cartReducer from "./CartReducer";

let reducers = combineReducers({
  cartReducer: cartReducer,
});

const reducer = (state, action) => {
  return reducers(state, action);
};

export default reducer;