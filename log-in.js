// Get elements
const loginPopup = document.getElementById("loginPopup");
const openLogin = document.getElementById("openLogin");
const closeBtn = document.querySelector(".close-btn");

// Show login form
openLogin.addEventListener("click", () => {
    loginPopup.style.display = "block";
});

// Hide login form
closeBtn.addEventListener("click", () => {
    loginPopup.style.display = "none";
});

// Hide when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === loginPopup) {
        loginPopup.style.display = "none";
    }
});
