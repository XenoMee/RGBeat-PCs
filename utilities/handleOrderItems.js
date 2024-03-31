import itemsArray from './data.js';
import totalPriceOrder from './getTotalOrderPrice.js';
const orderValueEl = document.querySelector('.order-value');

export const handleAddItem = (itemId, arr) => {
  const shopItemObj = itemsArray.filter((item) => item.id === itemId)[0];
  arr.unshift(shopItemObj);
  totalPriceOrder(arr, orderValueEl);
};

export const handleRemoveItem = (itemId, arr) => {
  const itemToRemove = arr.findIndex((item) => item.id === itemId);

  if (itemToRemove !== -1) arr.splice(itemToRemove, 1);

  totalPriceOrder(arr, orderValueEl);
};
