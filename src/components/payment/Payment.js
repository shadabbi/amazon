import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

import classes from "./Payment.module.scss";
import CartItem from "../cartItem/CartItem";
import { Link, useHistory } from "react-router-dom";
import axios from "../../axios/axios";

function Payment(props) {

  const stripe = useStripe();
  const elements = useElements();
  const history = useHistory();

  const user = props.user.user;
  const cartItems = props.checkoutItems.cartItems;

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(false);


  const total = (cartItems) => {
    const prices = cartItems.map((item) => item.price);
    const totalPrice = prices.reduce((pre, next) => pre + next, 0);
    return totalPrice;
  };

  useEffect(() =>{
    const getClientSecret = async () => {
      const res = await axios({
        method: "POST",
        url: `/payment/create/?total=${total(cartItems) * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    };

    getClientSecret();
  },[cartItems])
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
          card:elements.getElement(CardElement)
        }
    }).then(({ paymentIntent }) => {
      setSucceeded(true);
      setError(null);
      setProcessing(false)
      history.replace('/orders');
    })
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };



 

  return (
    <div className={classes.payment}>
      <div className={classes.paymentContainer}>
        <h1>
          Checkout (<Link to="/checkout">{cartItems?.length} items</Link>)
        </h1>
        <div className={classes.paymentSection}>
          <div className={classes.paymentTitle}>
            <h3>Delivery Address</h3>
          </div>
          <div className={classes.paymentAddress}>
            <p>{user?.email}</p>
            <p>house no. 177</p>
            <p>Najafgarh</p>
          </div>
        </div>
        <div className={classes.paymentSection}>
          <div className={classes.paymentTitle}>
            <h3>Review items and delivery</h3>
          </div>

          <div className={classes.paymentItems}>
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
        </div>

        <div className={classes.paymentSection}>
          <div className={classes.paymentTitle}>
            <h3>Payment Method</h3>
          </div>
          <div className={classes.paymentDetails}>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className={classes.priceContainer}>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  thousandSeparator
                  prefix="RS "
                  value={total(cartItems)}
                  displayType="text"
                  decimalScale={2}
                />
                <button
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error ? <div>{error}</div> : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  checkoutItems: state.cartItems,
  user: state.user,
});

export default connect(mapStateToProps)(Payment);
