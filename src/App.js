import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Sign from "./components/sign/Sign";
import Payment from "./components/payment/Payment";
import { auth } from "./firebase/firebase";
import { setUser } from "./redux/user/action";

const stripePromise = loadStripe(
  "pk_test_51HiKRGJfLerazQKfpNmfCddSknJr6rXzVgLcIqHR2RdrvYO8vIxk07lAKcpIduuaXTCq8Bxjmb4woIvOjS3qypq700Nipvgm3P"
);

class App extends Component {
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.props.dispatch(setUser(user));
    });
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/Sign">
            <Sign />
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default connect()(App);
