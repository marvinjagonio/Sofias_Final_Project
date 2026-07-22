// ===== SIGN-UP FORM ===== //

const signupForm = document.getElementById("signupForm");
const messageSignUp = document.getElementById("message_signup");
const signUpBtn = document.getElementById("signUpBtn");
const signUpPopup = document.getElementById("signUpPopup");
const signUpCloseBtn = document.querySelector(".sign-up_close-btn");

//sign-up pop-up

signUpBtn.addEventListener("click", () => {
  signUpPopup.style.display = "block";
});

signUpCloseBtn.addEventListener("click", () => {
  signUpPopup.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === signUpPopup) {
    signUpPopup.style.display = "none";
  }
});

signupForm.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent normal form submit

  const formData = new FormData(signupForm);

  const response = await fetch("/sign-up_submit", {
    method: "POST",
    body: new URLSearchParams(formData),
  });

  const resultText = await response.text();
  messageSignUp.textContent = resultText;

  // Optional: Style message color
  if (resultText.includes("✅")) {
    messageSignUp.style.color = "green";
    messageSignUp.style.fontSize = "small";
  } else {
    messageSignUp.style.color = "red";
    messageSignUp.style.fontSize = "small";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const signupCloseBtn = document.querySelector(".sign-up_close-btn");

  signupCloseBtn.addEventListener("click", () => {
    signupForm.reset();
    messageSignUp.textContent = "";
    messageSignUp.removeAttribute("style");
  });
});

// ===== LOGIN FORM ===== //

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

// ===== START POP-UP FORM ===== //

const popup = document.getElementById("start_popup");
const closeBtn = document.querySelector(".start_popup_close-btn");
const popupForm = document.getElementById("popupForm");
const popupMessage = document.getElementById("popup_message");
const chatFloatingText = document.querySelector(".chat-floating-text");

window.addEventListener("load", () => {
  const shown = localStorage.getItem("popupShown");

  if (shown) {
    openPopup();
  }
});

function openPopup() {
  popup.style.display = "flex";
  document.body.classList.add("no-scroll");
  chatFloatingText.style.display = "none";
}

function closePopup() {
  popup.style.display = "none";
  document.body.classList.remove("no-scroll");
  setTimeout(() => {
    chatFloatingText.style.display = "flex";

    setTimeout(() => {
      chatFloatingText.style.display = "none";
    }, 2000);
  }, 50);
}

closeBtn.addEventListener("click", closePopup);

popupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  popupMessage.textContent = "✅ You're subscribed!";
  popupMessage.style.color = "white";

  localStorage.setItem("popupShown", "true");

  setTimeout(() => {
    closePopup();
  }, 1500);
});

// ===== CUSTOMER SERVICE FLOATING TEXT ===== //
