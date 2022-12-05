const lightButton = document.querySelector('.share-icon-light');
const lightContainer = document.querySelector('.profile-container-light');
const darkButton = documnet.querySelector('.share-icon-dark');
const darkContainer = document.querySelector('.profile-container-dark');

lightButton.addEventListener('click', (event) => {
  event.preventDefault();
  lightContainer.style.display = 'none';
  darkContainer.style.display = 'flex';
})