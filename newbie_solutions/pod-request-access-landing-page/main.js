const email = document.getElementById('email');
const btn = document.querySelector('button');
const error = document.querySelector('.error');

btn.addEventListener("click", (event) => {
  if(!email.validity.valid) {
    showError();
  } else {
    error.innerHTML = '';
    email.setCustomValidity("Thanks!");
    email.reportValidity();
    email.value = '';

  }
})

function showError() {
  error.style.display = 'block';
  error.innerHTML = 'Ooops! Please check your email';
}
