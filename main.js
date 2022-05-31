const form = document.querySelector('form');
const rating = form.elements['rating'];

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (!rating.value) return;

  console.log(rating.value);
  window.location.href = `submit.html?rating=${rating.value}`;
});
