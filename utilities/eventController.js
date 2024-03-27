import { handleAddItem, handleRemoveItem } from './handleOrderItems.js';
import renderOrderItems from './renderOrderItems.js';
import displayPaymentModal from './displayPayment.js';

const registerEventListeners = (arr) => {
  document.addEventListener('click', (e) => {
    if (e.target.dataset.add) {
      handleAddItem(e.target.dataset.add, arr);
      renderOrderItems(arr);
    } else if (e.target.dataset.remove) {
      handleRemoveItem(e.target.dataset.remove, arr);
      renderOrderItems(arr);
    } else if (e.target.classList.contains('complete-btn')) {
      displayPaymentModal();
    }
  });
};

export default registerEventListeners;
