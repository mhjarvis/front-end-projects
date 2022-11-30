const email = document.getElementById('email');
const btn = document.querySelector('button');

btn.addEventListener("click", (event) => {
  if(!email.validity.valid) {
    showError();

/*     email.setCustomValidity("Ooops! Please check your email");
    email.reportValidity(); */
  } else {
    email.setCustomValidity("Thanks!");
    email.reportValidity();
    email.value = '';
  }
})

function showError() {
  
}