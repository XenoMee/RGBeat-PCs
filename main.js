import itemsArray from './utilities/data.js';
import renderShopItems from './utilities/renderShopItems.js';
import registerEventListeners from './utilities/eventController.js';
import showOrderSuccessMessage from './utilities/displayMessage.js';

export const orderItemsArr = [];

renderShopItems(itemsArray);
registerEventListeners(orderItemsArr);
showOrderSuccessMessage();
