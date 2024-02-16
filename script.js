const regex = /^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{3}$/;

function verifyName() {
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  if (firstname.value === "" || lastname.value === "") {
    alert("Please enter both your first and last name.");
  }
}

function verifyPassword() {
  let password = document.getElementById("password");
  if (password.value === "") {
    alert("Please enter a password.");
  }
}

function verifyEmail() {
  let email = document.getElementById("email");
  if (email.value === "") {
    alert("Please enter an email address.");
  } else if (!regex.test(email.value)) {
    alert("Please enter a valid email address. Example: username@example.com.");
  }
}

const submitButton = document.getElementById("green-button");

submitButton.addEventListener("click", () => {
  verifyName();
  verifyPassword();
  verifyEmail();
});