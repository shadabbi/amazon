const INIT_STATE = {
  products: [
    {
      id: 1,
      items: [
        {
          title: "the lean startup",
          imgUrl:
            "https://m.media-amazon.com/images/I/41vMYgD92xL._AC_SL260_.jpg",
          price: 199,
          rating: 3,
          id: 1,
        },
        {
          title: "the lean startup",
          imgUrl:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg",
          price: 199,
          rating: 3,
          id: 2,
        },
      ],
    },
    {
      id: 2,
      items: [
        {
          title: "the lean startup",
          imgUrl:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg",
          price: 199,
          rating: 3,
          id: 1,
        },
        {
          title: "the lean startup",
          imgUrl:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_HomeBedding_Single_Cat_1x._SY304_CB418596953_.jpg",
          price: 199,
          rating: 3,
          id: 2,
        },
        {
          title: "the lean startup",
          imgUrl:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg",
          price: 199,
          rating: 3,
          id: 3,
        },
      ],
    },

    {
      id: 3,
      items: [
        {
          title: "the lean startup",
          imgUrl:
            "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg",
          price: 199,
          rating: 3,
          id: 1,
        },
      ],
    },
  ],
};

const productsReducer = (state = INIT_STATE, action) => {
  return state;
};

export default productsReducer;
