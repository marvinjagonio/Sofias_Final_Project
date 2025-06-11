  // Get elements
const startPopupCloseBtn = document.querySelector(".start_popup_close-btn");
const startPopup = document.getElementById("start_popup");
const loginPopup = document.getElementById("loginPopup");
const loginBtn = document.getElementById("loginBtn");
const loginCloseBtn = document.querySelector(".login_close-btn");
const signUpBtn = document.getElementById("signUpBtn");
const signUpPopup = document.getElementById("signUpPopup");
const signUpCloseBtn = document.querySelector(".sign-up_close-btn");
const cartBtn = document.getElementById("cart");

//start_pop-up

startPopupCloseBtn.addEventListener("click", () => {
   startPopup.style.display = "none";
});

//log-in pop-up

loginBtn.addEventListener("click", () => {
  loginPopup.style.display = "block";
});

loginCloseBtn.addEventListener("click", () => {
  loginPopup.style.display = "none";
});

//sign-up pop-up


signUpBtn.addEventListener("click", () => {
    signUpPopup.style.display = "block";
});


signUpCloseBtn.addEventListener("click", () => {
    signUpPopup.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === loginPopup) {
        loginPopup.style.display = "none";
    }
    if (event.target === signUpPopup) {
        signUpPopup.style.display = "none";
    }
});

// start pop-up

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




