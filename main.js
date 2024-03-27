import renderShopItems from './utilities/renderShopItems.js';
import renderOrderItems from './utilities/renderOrderItems.js';
import itemsArray from './utilities/data.js';
import displayPaymentModal from './utilities/displayPayment.js';
let orderItemsArr = [];

renderShopItems();
displayPaymentModal();

document.addEventListener('click', (e) => {
  if (e.target.dataset.add) {
    handleAddItem(e.target.dataset.add);
    renderOrderItems(orderItemsArr);
  } else if (e.target.dataset.remove) {
    handleRemoveItem(e.target.dataset.remove);
    renderOrderItems(orderItemsArr);
  }
});

const handleAddItem = (itemId) => {
  const shopItemObj = itemsArray.filter((item) => item.id === itemId)[0];
  orderItemsArr.unshift(shopItemObj);
  totalPriceOrder(orderItemsArr);
};

const totalPriceOrder = (arr) => {
  const orderValueEl = document.querySelector('.order-value');
  const totalOrderValue = arr.reduce(
    (total, orderItem) => total + orderItem.price,
    0
  );

  if (arr.length > 0) orderValueEl.textContent = `$${totalOrderValue}`;
  else orderValueEl.textContent = `$0`;
};

const handleRemoveItem = (itemId) => {
  const itemToRemove = orderItemsArr.findIndex((item) => item.id === itemId);

  if (itemToRemove !== -1) orderItemsArr.splice(itemToRemove, 1);

  totalPriceOrder(orderItemsArr);
};
