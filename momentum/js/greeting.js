const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#usernameInput");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
function onLoginSubmit(event){
  event.preventDefault();
  const username = loginInput.value;
  loginForm.style.display="none";
  localStorage.setItem("username", username);
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = "Welcome " + username + "!";
  greeting.style.display="block";
  todoForm.style.display="block";
}
const savedUsername = localStorage.getItem("username");
loginForm.addEventListener("submit", onLoginSubmit);
if (savedUsername === null) {
  loginForm.style.display="block";
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
