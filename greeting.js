const params = new URLSearchParams(window.location.search);
const rating = params.get('rating');
const userRating = document.getElementById('userRating');

window.onload = function () {
  console.log(rating);
  userRating.innerHTML =
    rating && rating > 0 && rating < 6 && `You selected ${rating} out of 5  `;
};
