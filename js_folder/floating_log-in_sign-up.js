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

// Hide when clicking outside (for both popups)
window.addEventListener("click", (event) => {
    if (event.target === loginPopup) {
        loginPopup.style.display = "none";
    }
    if (event.target === signUpPopup) {
        signUpPopup.style.display = "none";
    }
});



