import React from "react";
import { connect } from "react-redux";

import classes from "./CartItem.module.scss";
import { removeFromCart } from "../../redux/cart/action";

function CartItem(props) {
  return (
    <div className={classes.cartItem}>
      <div className={classes.imgContainer}>
        <img src={props.imgUrl} alt="img" />
      </div>
      <div className={classes.cartItemInfo}>
        <p className={classes.title}>{props.desc}</p>
        <p className={classes.price}>
          <small>RS </small>
          <strong>{props.price}</strong>
        </p>
        <div className={classes.rating}>
          <p>
            {Array(props.rating)
              .fill(2)
              .map((_) => (
                <span>⭐</span>
              ))}
          </p>
        </div>
        <button onClick={() => props.dispatch(removeFromCart(props.idx))}>
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default connect()(CartItem);
