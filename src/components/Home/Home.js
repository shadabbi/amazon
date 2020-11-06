import React from "react";
import { connect } from "react-redux";

import classes from "./Home.module.scss";
import Product from "../Product/Product";

function Home({ products }) {
  const allproducts = products.products;

  return (
    <div className={classes.home}>
      <div className={classes.homeContainer}>
        <img
          className={classes.homeImg}
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/October/Fuji_Tallhero_Dash_en_US_1x._CB418727898_.jpg"
          alt="banner"
        />

        {allproducts.map((product) => {
          return (
            <div className={classes.homeRow} key={product.id}>
              {product.items.map((item) => (
                <Product key={item.id} item={item} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(Home);
