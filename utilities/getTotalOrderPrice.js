const totalPriceOrder = (arr, orderValue) => {
  const totalOrderValue = arr.reduce(
    (total, orderItem) => total + orderItem.price,
    0
  );

  if (arr.length > 0) orderValue.textContent = `$${totalOrderValue}`;
  else orderValue.textContent = `$0`;
};

export default totalPriceOrder;
