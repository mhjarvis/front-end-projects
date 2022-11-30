const email = document.getElementById('email');
const btn = document.querySelector('button');

btn.addEventListener("click", (event) => {
  if(email.validity.typeMismatch) {
    email.setCustomValidity("Ooops! Please check your email");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
})



/* const email = document.getElementById('email');

email.addEventListener("input", (event) => {
  if(email.validity.typeMismatch) {
    email.setCustomValidity("Ooops! Please check your email");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
}) */



// 'Ooops! Please check your email