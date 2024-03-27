const renderOrderItems = (arr) => {
  if (arr.length <= 0) return;

  const orderItems = arr
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

  document.querySelector('.check-list').innerHTML = orderItems;
};

export default renderOrderItems;
