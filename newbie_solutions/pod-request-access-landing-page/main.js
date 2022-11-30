const email = doc
document.querySelector('button');

email.addEventListener("click", (event) => {
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