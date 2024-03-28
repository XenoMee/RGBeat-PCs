import rateExperience from './rateExperience.js';

const showOrderSuccessMessage = () => {
  const crediCardEl = document.querySelector('.credit-card');
  const paymentModal = document.querySelector('.card-details-modal');

  crediCardEl.addEventListener('submit', (e) => {
    e.preventDefault();
    completeOrder();
  });

  function completeOrder() {
    paymentModal.style.scale = '0';
    document.querySelector('.shop__check').textContent = '';
    setTimeout(() => {
      rateExperience();
    }, 300);
    displaySuccessMessage();
  }
};

export default showOrderSuccessMessage;
