import React from "react";
import { connect } from "react-redux";

import classes from "./Checkout.module.scss";
import Subtotal from "../Subtotal/Subtotal";
import CartItem from "../cartItem/CartItem";

function Checkout(props) {
  const cartItems = props.checkoutItems.cartItems;
  const { user } = props.user;

  return (
    <div className={classes.checkout}>
      <div className={classes.checkoutLeft}>
        <div>
          <h2> Hello {user ? user.email : null}</h2>
          <h2 className={classes.checkoutTitle}>Your shopping cart</h2>
        </div>

        {cartItems.length > 0
          ? cartItems.map((item, idx) => (
              <CartItem
                idx={idx}
                item={item}
                key={item.id}
                imgUrl={item.imgUrl}
                rating={item.rating}
                desc={item.title}
                price={item.price}
              />
            ))
          : "Your Amazon Cart is empty."}
      </div>
      <div className={classes.checkoutRight}>
        <Subtotal />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  checkoutItems: state.cartItems,
  user: state.user,
});

export default connect(mapStateToProps)(Checkout);
