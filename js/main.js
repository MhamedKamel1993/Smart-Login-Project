var Form = document.getElementById("Login");
var UserEmail = document.getElementById("UserEmail");
var password = document.getElementById("Userpassword");
var inputsAlert = document.getElementById("inputsAlert");
var weldoneAlert = document.getElementById("weldoneAlert");
var userblock = document.getElementById("userblock");
var Users = [];
var temp;

if (localStorage.getItem("user") != null) {
  Users = JSON.parse(localStorage.getItem("user"));
}

function isTheSameUser(userinput) {
  for (var i = 0; i < Users.length; i++) {
    if (
      Users[i].Mail.toLowerCase() == userinput.Mail.toLowerCase() &&
      Users[i].Pass.toLowerCase() == userinput.Pass.toLowerCase()
    ) {
      localStorage.setItem('UserName',Users[i].Name);
console.log('founded');
      return true;
    } else {
      return false;
    }
  }
}

function login() {
  temp = newUser;
  var newUser = {
    Mail: UserEmail.value,
    Pass: password.value,
  };
  if (isTheSameUser(newUser)) {
    weldoneAlert.classList.replace("d-none", "d-block");
    window.location.href="./home.html"

  } else {
    userblock.classList.replace("d-none", "d-block");

  }
}
Form.addEventListener("submit", function (event) {
  event.preventDefault();
  login();
});
