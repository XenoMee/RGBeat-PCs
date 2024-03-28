import titleCase from './titleCaseWords.js';

function rateOrderExperience() {
  const ratingCard = document.querySelector('.rating-card');
  const ratingListEl = document.querySelector('.rating-list');
  const submitRatingBtn = ratingCard.querySelector('.submit-btn');
  ratingCard.style.scale = '1';

  ratingListEl.addEventListener('click', (e) => {
    const selectedRating = e.target.closest('.rating-item');
    const selectedBtn = ratingListEl.querySelector('[data-selected="true"');
    if (!selectedRating) return;

    if (selectedBtn) {
      selectedBtn.setAttribute('data-selected', 'false');
    }
    selectedRating.setAttribute('data-selected', 'true');
  });

  submitRatingBtn.addEventListener('click', () => {
    const ratingBtns = ratingListEl.querySelectorAll('.rating-item');
    ratingBtns.forEach((rating) => {
      if (rating.dataset.selected === 'true') {
        ratingCard.style.scale = '0';
        displaySuccessMessage();
        setTimeout(() => {
          rating.setAttribute('data-selected', 'false');
        }, 250);
      }
    });
  });

  function displaySuccessMessage() {
    const cardholderName = document.querySelector('#name');
    const shopCheckEl = document.querySelector('.shop__check');
    const successOrderMessage = document.createElement('h2');
    successOrderMessage.className = 'order-success text-green-500';
    successOrderMessage.innerHTML = `Thanks for choosing us, ${titleCase(
      cardholderName.value
    )}! Your order is on its way 🚚`;
    shopCheckEl.appendChild(successOrderMessage);

    setTimeout(() => {
      successOrderMessage.style.scale = '1';
    }, 500);
  }
}

export default rateOrderExperience;
