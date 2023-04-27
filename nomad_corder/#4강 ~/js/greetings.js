const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 일반적으로 string만 포함된 변수는 대문자로 표기. 
// 그리고 이건 loginForm 이나 loginInput 처럼 중요한 정보를 담은게 아니라서 대문자로 작성함.

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const typedUsername = loginInput.value; // 이름을 변수로 저장
    localStorage.setItem(USERNAME_KEY, typedUsername); // 저장될 이름, 위에 선언한  const typedUsername = loginInput.value;
    paintGreeting(typedUsername); // 호출
}

function paintGreeting(typedUsername) {
    greeting.innerText = `Hello ${typedUsername}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY); // 로컬스토리지에서 이름 저장

if (saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
}else{
    paintGreeting(saveUsername);
}