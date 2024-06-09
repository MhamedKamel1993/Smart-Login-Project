var Form = document.getElementById("Registeration");
var UserName = document.getElementById("UserName");
var UserEmail = document.getElementById("UserEmail");
var password = document.getElementById("Userpassword");
var inputsAlert = document.getElementById("inputsAlert");
var weldoneAlert = document.getElementById("weldoneAlert");
var block = document.getElementById("block");
var Users = [];
var temp;
// console.log(Form, UserName, UserEmail, password, mailAlert, nameAlert);

if (localStorage.getItem("user") != null) {
  Users = JSON.parse(localStorage.getItem("user"));
}

function validateNameInput() {
  var nameRegex = /[a-zA-Z0-9]/;
  if (nameRegex.test(UserName.value)) {
    return true;
  } else {
    inputsAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function validateEmailInput() {
  var emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  if (emailRegex.test(UserEmail.value)) {
    return true;
  } else {
    inputsAlert.classList.replace("d-none", "d-block");

    return false;
  }
}
function validatepasswordInput() {
  var passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
  if (passwordRegex.test(password.value)) {
    return true;
  } else {
    inputsAlert.classList.replace("d-none", "d-block");
    return false;
  }
}

function isInputsValid() {
  if (validateNameInput() && validateEmailInput() && validatepasswordInput()) {
    return true;
  } else {
    return false;
  }
}

function addUser() {
  temp = newUser;
  var newUser = {
    Name: UserName.value,
    Mail: UserEmail.value,
    Pass: password.value,
  };
  if (isUserExist(newUser)) {
    block.classList.replace("d-none", "d-block");
  } else {
    Users.push(newUser);
    console.log(Users);
    window.location.href="./index.html"
    localStorage.setItem("user", JSON.stringify(Users));
    weldoneAlert.classList.replace("d-none", "d-block");
   ;
  }
}
function isUserExist(temp) {
  for (var i = 0; i < Users.length; i++) {
    if (Users[i].Mail.toLowerCase() == temp.Mail.toLowerCase()) return true;
  }
}
Form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (isInputsValid()) {
    addUser();
  }
});
