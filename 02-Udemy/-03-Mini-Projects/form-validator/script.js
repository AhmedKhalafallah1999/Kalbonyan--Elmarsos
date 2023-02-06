const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passowrd2 = document.getElementById("password2");
// show Error

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// show Success

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// function to check the email by using Reg. Expression

function checkEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return re.test(String(email).toLowerCase());
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// more clean code
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is Required`);
    } else {
      showSuccess(input);
    }
  });
}
// get field input
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// check length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} charecters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} charecters`
    );
  } else {
    showSuccess(input);
  }
}
// checkPasswordsMatch
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "passwords do not match");
  } else {
    showSuccess(input2);
  }
}
// Event Listinner
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // if (username.value === "") {
  //   showError(username, "user name is required");
  // } else {
  //   showSuccess(username);
  // }
  // if (email.value === "") {
  //   showError(email, "email is required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "email is not valid");
  // } else {
  //   showSuccess(email);
  // }
  // if (password.value === "") {
  //   showError(password, "password is required");
  // } else {
  //   showSuccess(password);
  // }
  // if (passowrd2.value === "") {
  //   showError(passowrd2, "password 2 is required");
  // } else {
  //   showSuccess(passowrd2);
  // }
  checkRequired([username, email, password, passowrd2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, passowrd2);
});
