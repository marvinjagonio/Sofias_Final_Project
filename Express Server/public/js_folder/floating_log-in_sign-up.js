// Get elements
const startPopupCloseBtn = document.querySelector(".start_popup_close-btn");
const startPopup = document.getElementById("start_popup");
const loginPopup = document.getElementById("loginPopup");
const loginBtn = document.getElementById("loginBtn");
const loginCloseBtn = document.querySelector(".login_close-btn");
const signUpBtn = document.getElementById("signUpBtn");
const signUpPopup = document.getElementById("signUpPopup");
const signUpCloseBtn = document.querySelector(".sign-up_close-btn");

// Elements to update
const popupImage = document.getElementById("popupProductImage");
const popupName = document.getElementById("popupProductName");
const popupQuantity = document.getElementById("popupProductQuantity");
const popupPrice = document.getElementById("popupProductPrice");
const popLessPrice = document.getElementById("popupProductLess");

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
  if (event.target === addToCartPopup) {
    addToCartPopup.style.display = "none";
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
    }, 1500);
  }
};
