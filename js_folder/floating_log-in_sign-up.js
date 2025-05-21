

// Get elements
const loginPopup = document.getElementById("loginPopup");
const openLogin = document.getElementById("openLogin");
const closeLoginBtn = document.querySelector(".close-btn");
const signUpPopup = document.getElementById("signUpPopup");
const openSignUp = document.getElementById("openSignUp");
const closeSignUpBtn = document.querySelector(".sign-up_close-btn");

// Show login form
openLogin.addEventListener("click", () => {
    loginPopup.style.display = "block";
});

// Hide login form
closeLoginBtn.addEventListener("click", () => {
    loginPopup.style.display = "none";
});

// Show sign-up form
openSignUp.addEventListener("click", () => {
    signUpPopup.style.display = "block";
});

// Hide sign-up form
closeSignUpBtn.addEventListener("click", () => {
    signUpPopup.style.display = "none";
});

// Hide when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === loginPopup) {
        loginPopup.style.display = "none";
    }
    if (event.target === signUpPopup) {
        signUpPopup.style.display = "none";
    }
});

function showPopup() {
    document.getElementById("start_popup").style.display = "flex";
  }

  function closePopup() {
    document.getElementById("start_popup").style.display = "none";
  }

  window.onclick = () => {
    if (!localStorage.getItem("popupShown")) {
      setTimeout(() => {
        showPopup();
        localStorage.setItem("popupShown", "true");
      }, 1500); // Popup appears 1.5 seconds after load
    }
  };


