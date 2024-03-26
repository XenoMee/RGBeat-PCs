import itemsArray from './data.js';

const shopListEl = document.querySelector('.shop__list');

shopListEl.addEventListener('click', handleAddItem);

const handleAddItem = (itemId) => {
  const shopItemObj = itemsArray.filter((item) => item.id === itemId)[0];
  const shopItem = document.createElement('li');
  shopItem.className = 'check-item flex items-center justify-between';
  shopItem.innerHTML = `
  <div class="flex items-center gap-2">
    <h3 class="item-title">${shopItemObj.name}</h3>
    <button aria-label="Remove Item from Order" class="remove-btn text-red-500">
      <i class="fa-solid fa-trash-can"></i>
    </button>
   </div>

    <p class="item-price">$<span class="price-value">${shopItemObj.price}</span></p>`;
};
