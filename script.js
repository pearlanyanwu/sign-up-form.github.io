const regex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{3}$/;

function verifyName() {
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  if (firstname.value === "" || lastname.value === "") {
  }
}

function verifyPassword() {
  let password = document.getElementById("password");
  if (password.value === "") {
  }
}

function verifyEmail() {
  let email = document.getElementById("email");
  if (email.value === "") {
  } else if (!regex.test(email.value)) {
  }
}

const submitButton = document.getElementById("green-button");

submitButton.addEventListener("click", () => {
  verifyName();
  verifyPassword();
  verifyEmail();
});