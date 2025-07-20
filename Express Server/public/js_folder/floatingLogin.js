 // ===== LOGIN FORM =====


 const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("message_login");


loginForm.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent the form from redirecting

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
