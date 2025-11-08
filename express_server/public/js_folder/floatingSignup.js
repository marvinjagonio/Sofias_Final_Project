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
