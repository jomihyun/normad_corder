const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const userName = loginInput.value;
  if( userName == ""){
    alert("Please enter your name");
  }else if( userName.length < 15 ){
    alert("Your name must be at least 15 characters");
  }
}

loginButton.addEventListener("click", onLoginBtnClick);