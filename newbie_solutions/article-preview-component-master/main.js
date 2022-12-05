const lightButton = document.querySelector('.share-icon-light');
const lightContainer = document.querySelector('.profile-container-light');

lightButton.addEventListener('click', (event) => {
  event.preventDefault();
  lightContainer.style.display = 'none';
})