import itemsArray from './data.js';

const renderShopItems = () => {
  const shopList = itemsArray
    .map((item) => {
      return `
    <li class="shop-item">
        <div class="flex items-center justify-between">
            <div class="flex  items-center gap-4">
                <img class="item-image"
                    src="${item.image}"
                    alt="">
                <div class="item-details">
                    <h3 class="item-title">${item.name}</h3>
                    <p class="item-description">${item.tags.join(', ')}</p>
                    <p class="item-price">$<span class="price-value">${
                      item.price
                    }</span></p>
                </div>
            </div>
            <button class="btn add-btn ">
                <i class="fa-solid fa-plus"></i>
            </button>
        </div>
    </li>
    `;
    })
    .join('');

  document.querySelector('.shop__list').innerHTML = shopList;
};

export default renderShopItems();
