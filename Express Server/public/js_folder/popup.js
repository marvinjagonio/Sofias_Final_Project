document.addEventListener("DOMContentLoaded", () => {
  // ===== SIGN-UP FORM =====
  const signupForm = document.getElementById('signupForm');
  const signupMessage = document.getElementById('message');
  const signupCloseBtn = document.querySelector(".sign-up_close-btn");

  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      signup_name: document.getElementById('signup_name').value,
      signup_username: document.getElementById('signup_username').value,
      signup_email: document.getElementById('signup_email').value,
      signup_password: document.getElementById('signup_password').value
    };

    try {
      const response = await fetch('/sign-up_submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(data).toString()
      });

      const text = await response.text();

      signupMessage.textContent = text;
      signupMessage.style.fontSize = 'small';
      signupMessage.style.color = text.includes('already exists') ? 'red' : 'green';

    } catch (error) {
      signupMessage.textContent = text;
      signupMessage.style.fontSize = 'small';
      signupMessage.style.color = 'red';
    }
  });

  signupCloseBtn.addEventListener("click", () => {
    signupForm.reset();
    signupMessage.textContent = "";
    signupMessage.removeAttribute("style");
  });

  // ===== LOGIN FORM =====
  const loginForm = document.getElementById("loginForm");
  const loginMessage = document.getElementById("message_login");
  const loginCloseBtn = document.querySelector(".login_close-btn");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch("/login_submit", {
      method: "POST",
      body: new URLSearchParams(formData),
    })
      .then((response) => response.text())
      .then((text) => {
        loginMessage.textContent = text;
        loginMessage.style.fontSize = 'small';
        loginMessage.style.color = text.includes("successful") ? "green" : "red";
      });
  });

  loginCloseBtn.addEventListener("click", () => {
    loginForm.reset();
    loginMessage.textContent = "";
    loginMessage.removeAttribute("style");
  });
});
