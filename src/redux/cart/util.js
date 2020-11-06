export const total = (items) => {
  const prices = items.map((item) => item.price);
  const totalPrice = prices.reduce((pre, next) => pre + next, 0);
  return totalPrice;
};
