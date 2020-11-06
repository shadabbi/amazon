import { total } from "./util";

const INIT_STATE = {
  totalPrice: 0,
  cartItems: [],
};

const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: total([...state.cartItems, action.payload]),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item, idx) => idx !== action.payload
        ),
        totalPrice: total([...state.cartItems]),
      };

    default:
      return state;
  }
};

export default cartReducer;
