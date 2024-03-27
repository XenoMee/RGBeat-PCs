import renderShopItems from './utilities/renderShopItems.js';
import renderOrderItems from './utilities/renderOrderItems.js';
import itemsArray from './utilities/data.js';
import displayPaymentModal from './utilities/displayPayment.js';
let orderItemsArr = [];

renderShopItems();

document.addEventListener('click', (e) => {
  if (e.target.dataset.add) {
    handleAddItem(e.target.dataset.add);
    renderOrderItems(orderItemsArr);
  } else if (e.target.dataset.remove) {
    handleRemoveItem(e.target.dataset.remove);
    renderOrderItems(orderItemsArr);
  } else if (e.target.classList.contains('complete-btn')) {
    displayPaymentModal();
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

const crediCardEl = document.querySelector('.credit-card');
const paymentModal = document.querySelector('.card-details-modal');
const shopCheckEl = document.querySelector('.shop__check');
const cardholderName = document.querySelector('#name');

crediCardEl.addEventListener('submit', (e) => {
  e.preventDefault();
  paymentModal.style.scale = '0';
  shopCheckEl.textContent = '';

  const successOrderMessage = document.createElement('h2');
  successOrderMessage.className = 'order-success text-green-500';
  successOrderMessage.textContent = `Thanks for choosing us, ${titleCase(
    cardholderName.value
  )}! Your order is on its way 🚚`;
  shopCheckEl.appendChild(successOrderMessage);

  setTimeout(() => {
    successOrderMessage.style.scale = '1';
  }, 500);
});

function titleCase(str) {
  const words = str.toLowerCase().split(' ');
  let modifiedString = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    modifiedString.push(word.charAt(0).toUpperCase() + word.slice(1));
  }

  return modifiedString.join(' ');
}
