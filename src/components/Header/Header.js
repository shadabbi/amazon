import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./Header.module.scss";
import { auth } from "../../firebase/firebase";

function Header(props) {
  const cartItems = props.cartItems.cartItems;
  const user = props.user.user;

  const authenticationHandler = () => {
    if (user) {
      auth.signOut();
    } else {
      props.history.push("/sign");
    }
  };
  return (
    <div className={classes.header}>
      <img
        onClick={() => props.history.push("/")}
        className={classes.logo}
        src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="logo"
      />

      <div className={classes.search}>
        <input type="text" className={classes.searchInput} />
        <SearchIcon className={classes.searchIcon} />
      </div>

      <div className={classes.headerNav}>
        <div className={classes.option} onClick={() => authenticationHandler()}>
          <span className={classes.one}>
            Hello {user ? user.email : "Guest"}
          </span>
          <span className={classes.two}>{user ? "sign out" : "sign in"}</span>
        </div>
        <div className={classes.option}>
          <span className={classes.one}>Retures</span>
          <span className={classes.two}>& oreders</span>
        </div>
        <div className={classes.option}>
          <span className={classes.one}>Your</span>
          <span className={classes.two}>prime</span>
        </div>
        <div
          className={classes.optionBasket}
          onClick={() => props.history.push("/checkout")}
        >
          <ShoppingCartIcon className={classes.optionBasket} />
          <span className={[classes.two, classes.basketCount].join(" ")}>
            {cartItems ? cartItems.length : 0}
          </span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartItems: state.cartItems,
  user: state.user,
});

export default connect(mapStateToProps)(withRouter(Header));
