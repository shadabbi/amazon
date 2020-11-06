import { combineReducers } from "redux";

import productReducer from "./home/reducer";
import cartReducer from "./cart/reducer";
import userReducer from "./user/reducer";

const reducers = combineReducers({
  products: productReducer,
  cartItems: cartReducer,
  user: userReducer,
});

export default reducers;
