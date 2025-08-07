// ===== LOGIN FORM =====

const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("message_login");
const loginPopup = document.getElementById("loginPopup");
const loginBtn = document.getElementById("loginBtn");
const loginCloseBtn = document.querySelector(".login_close-btn");

//log-in pop-up

loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

loginCloseBtn.addEventListener("click", () => {
  loginPopup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === loginPopup) {
    loginPopup.style.display = "none";
  }
});

loginForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(loginForm);

  const response = await fetch("/login_submit", {
    method: "POST",
    body: new URLSearchParams(formData),
  });

  const resultText = await response.text();
  loginMessage.textContent = resultText;

  loginMessage.style.fontSize = "small";
  loginMessage.style.color = resultText.includes("✅") ? "green" : "red";
});

document.addEventListener("DOMContentLoaded", () => {
  const loginCloseBtn = document.querySelector(".login_close-btn");

  loginCloseBtn.addEventListener("click", () => {
    loginForm.reset();
    loginMessage.textContent = "";
    loginMessage.removeAttribute("style");
  });
});
