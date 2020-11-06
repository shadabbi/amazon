import React from "react";
import { connect } from "react-redux";

import classes from "./Product.module.scss";
import { addToCart } from "../../redux/cart/action";

function Product(props) {
  const { title, price, rating, imgUrl } = props.item;

  return (
    <div className={classes.product}>
      <div className={classes.productInfo}>
        <p>{title}</p>
        <p className={classes.productPrice}>
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <p className={classes.rating}>
          {Array(rating)
            .fill(2)
            .map((_) => (
              <span>⭐</span>
            ))}
        </p>
      </div>
      <img src={imgUrl} alt="product" />
      <button onClick={() => props.dispatch(addToCart(props.item))}>
        Add To Cart
      </button>
    </div>
  );
}

export default connect()(Product);
