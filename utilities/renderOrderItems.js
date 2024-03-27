const renderOrderItems = (arr) => {
  const checkListEl = document.querySelector('.check-list');
  const shopCheckEl = document.querySelector('.shop__check');

  if (arr.length > 0) {
    shopCheckEl.classList.remove('hidden');
    shopCheckEl.classList.add('grid');
  } else {
    shopCheckEl.classList.add('hidden');
    shopCheckEl.classList.remove('grid');
  }

  checkListEl.innerHTML = arr
    .map((orderItem) => {
      return `
            <li class="check-item flex items-center justify-between">
              <div class="flex items-center gap-2">
                <h3 class="item-title">${orderItem.name}</h3>
                <button aria-label="Remove Item from Order" class="remove-btn text-red-500">
                  <i class="fa-solid fa-trash-can" data-remove="${orderItem.id}"></i>
                </button>
              </div>
           
              <p class="item-price">$<span class="price-value">${orderItem.price}</span></p>
            </li>
      `;
    })
    .join('');
};

export default renderOrderItems;
