let errorName = document.getElementById('name-error');
let errorPhone = document.getElementById('phone-error');
let errorEmail = document.getElementById('email-error');
let errorMessage = document.getElementById('message-error');

let errorSubmit = document.getElementById('submit-error');

validateName = () => {
  let name = document.getElementById('contact-name').value;
  
  if (name.length == 0) {
    errorName.innerHTML = "Name is required"
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    errorName.innerHTML = "Write Full name";
    return false;
  }
  errorName.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
  return true;
}

validatePhone = () => {
  let phone = document.getElementById('contact-phone').value;
  
  if (phone.length == 0) {
    errorPhone.innerHTML = "Enter phone number";
    return false;
  }
  if (phone.length !== 10) {
    errorPhone.innerHTML = "Phone no should be 10 digit";
    return false;
  }
  if (!phone.match(/^[0-9]{10}$/)) {
    errorPhone.innerHTML = "Enter only digit";
    return false;
  }
  errorPhone.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
  return true;
}


validateEmail = () => { 
  let email = document.getElementById('contact-email').value;
  
  if (email.length == 0) {
    errorEmail.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errorEmail.innerHTML = "Enter valid email";
    return false;
  }
  errorEmail.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
  return true;
}

validateMessage = () => {
  let message = document.getElementById('contact-message').value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    errorMessage.innerHTML = left + 'more characters required';
    return false;
  }
  errorMessage.innerHTML = '<i class="fa fa-check-circle-o" aria-hidden="true"></i>';
  return true;
}

validateForm = () => {
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
    errorSubmit.style.display = "block";
    errorSubmit.innerHTML = 'Please fix error to Submit';
    setTimeout(function () {
      errorSubmit.style.display = 'none';
    }, 3000);
    return false;
  }
}




