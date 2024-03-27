import itemsArray from './data.js';

const renderShopItems = () => {
  const shopList = itemsArray
    .map((item) => {
      return `
    <li class="shop-item flex items-center justify-between">

            <div class="shop-item-content grid gap-4">
                <img class="item-image"
                    src="${item.image}"
                    alt="">
                <div class="item-details flex flex-col justify-between">
                    <div class="item-header">
                        <h3 class="item-title">${item.name}</h3>
                        <p class="item-description">${item.tags.join(', ')}</p>
                    </div>
                    <p class="item-price">$<span class="price-value">${
                      item.price
                    }</span></p>
                </div>
            </div>
            <button aria-label="Add Item to Order" class="btn add-btn">
                <i class="fa-solid fa-plus" data-add="${item.id}"></i>
            </button>
    </li>
    `;
    })
    .join('');

  document.querySelector('.shop__list').innerHTML = shopList;
};

export default renderShopItems;
