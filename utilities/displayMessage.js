const showOrderSuccessMessage = () => {
  const crediCardEl = document.querySelector('.credit-card');
  const paymentModal = document.querySelector('.card-details-modal');
  const shopCheckEl = document.querySelector('.shop__check');
  const cardholderName = document.querySelector('#name');

  crediCardEl.addEventListener('submit', (e) => {
    e.preventDefault();
    completeOrder();
  });

  function displaySuccessMessage() {
    const successOrderMessage = document.createElement('h2');
    successOrderMessage.className = 'order-success text-green-500';
    successOrderMessage.textContent = `Thanks for choosing us, ${titleCase(
      cardholderName.value
    )}! Your order is on its way 🚚`;
    shopCheckEl.appendChild(successOrderMessage);

    setTimeout(() => {
      successOrderMessage.style.scale = '1';
    }, 500);
  }

  function completeOrder() {
    paymentModal.style.scale = '0';
    shopCheckEl.textContent = '';
    displaySuccessMessage();
  }

  function titleCase(str) {
    const words = str.toLowerCase().split(' ');
    let modifiedString = [];
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      modifiedString.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return modifiedString.join(' ');
  }
};

export default showOrderSuccessMessage;
