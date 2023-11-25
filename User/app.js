const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
  handleSignup(); // Handle sign-up data
});
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
  handleLogin(); // Handle login data
});
function handleSignup() {
  const signupForm = document.querySelector("#signup-form");
  const signupData = {
    username: signupForm.querySelector("#username").value,
    password: signupForm.querySelector("#password").value,
  };
  saveSignupData(signupData);
}
function handleLogin() {
  const loginForm = document.querySelector("#login-form");
  const loginData = {
    username: loginForm.querySelector("#username").value,
    password: loginForm.querySelector("#password").value,
  };
  authenticateUser(loginData);
}
function saveSignupData(data) {
  console.log("Signup data:", data);
}
function authenticateUser(data) {
  console.log("Login data:", data);
}
