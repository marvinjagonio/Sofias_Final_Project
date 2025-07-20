const signupForm = document.getElementById('signupForm');
  const messageSignUp = document.getElementById('message_signup');
  

  signupForm.addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevent normal form submit

    const formData = new FormData(signupForm);

    const response = await fetch('/sign-up_submit', {
      method: 'POST',
      body: new URLSearchParams(formData)
    });

    const resultText = await response.text();
    messageSignUp.textContent = resultText;

    // Optional: Style message color
    if (resultText.includes('✅')) {
      messageSignUp.style.color = 'green';
      messageSignUp.style.fontSize = 'small';
    } else {
      messageSignUp.style.color = 'red';
      messageSignUp.style.fontSize = 'small';
    }
  });
document.addEventListener("DOMContentLoaded", () => {

  const signupCloseBtn = document.querySelector('.sign-up_close-btn');

  signupCloseBtn.addEventListener("click", () => {
  signupForm.reset();
  messageSignUp.textContent = "";
  messageSignUp.removeAttribute("style");

});
});