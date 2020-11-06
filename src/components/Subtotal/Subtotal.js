import React from "react";
import CurrencyFormat from "react-currency-format";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import classes from "./Subtotal.module.scss";

function Subtotal({ cartItems }) {
  const history = useHistory();

  const total = (cartItems) => {
    const prices = cartItems.map((item) => item.price);
    const totalPrice = prices.reduce((pre, next) => pre + next, 0);
    return totalPrice;
  };
  return (
    <div className={classes.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              subtotal ({cartItems.length} items): <strong>{value}</strong>
            </p>
            <small className={classes.subtotalGift}>
              <input type="checkbox"></input> This offer contains a gift
            </small>
          </>
        )}
        thousandSeparator
        prefix="RS "
        value={total(cartItems)}
        displayType="text"
        decimalScale={2}
      />

      <button onClick={() => history.push("/payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems.cartItems,
});

export default connect(mapStateToProps)(Subtotal);
