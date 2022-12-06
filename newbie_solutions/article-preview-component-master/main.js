const lightButton = document.querySelector('.share-icon-light');
const lightContainer = document.querySelector('.profile-container-light');
const darkButton = document.querySelector('.share-icon-dark');
const darkContainer = document.querySelector('.profile-container-dark');

lightButton.addEventListener('click', (event) => {
  event.preventDefault();

  if(window.screen.width >= 700) {
    darkContainer.style.display = 'flex';
    return;
  }

  lightContainer.style.display = 'none';
  darkContainer.style.display = 'flex';
})

darkButton.addEventListener('click', (event) => {
  event.preventDefault();
  darkContainer.style.display = 'none';
  lightContainer.style.display = 'flex';
})