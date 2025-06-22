  // Get elements
const startPopupCloseBtn = document.querySelector(".start_popup_close-btn");
const startPopup = document.getElementById("start_popup");
const loginPopup = document.getElementById("loginPopup");
const loginBtn = document.getElementById("loginBtn");
const loginCloseBtn = document.querySelector(".login_close-btn");
const signUpBtn = document.getElementById("signUpBtn");
const signUpPopup = document.getElementById("signUpPopup");
const signUpCloseBtn = document.querySelector(".sign-up_close-btn");
const cartBtn = document.querySelectorAll(".cart");
const addToCartPopup = document.getElementById("addToCartPopup");
const addToCartCloseBtn = document.querySelector(".addToCart_close-btn");

  // Elements to update
  const popupImage = document.getElementById('popupProductImage');
  const popupName = document.getElementById('popupProductName');
  const popupQuantity = document.getElementById('popupProductQuantity');
  const popupPrice = document.getElementById('popupProductPrice');
  const popLessPrice = document.getElementById('popupProductLess');

  // Add to Cart logic
cartBtn.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const image = button.getAttribute('data-image');
    const quantity = button.getAttribute('data-quantity');
    const total = button.getAttribute('data-total');
    const less = button.getAttribute('data-less');

    popupImage.src = image;
    popupName.innerHTML = `<b>${name}</b>`;
    popupQuantity.textContent = `Quantity: ${quantity}`;
    popupPrice.textContent = `Cart Total: ${total}`;
    popLessPrice.textContent = `${less}`

    addToCartPopup.style.display = 'block';
  });
});

//  Add to Cart pop-up

  addToCartCloseBtn.addEventListener("click", () => {
  addToCartPopup.style.display = "none";
});

//start_pop-up

startPopupCloseBtn.addEventListener("click", () => {
   startPopup.style.display = "none";
});


// Sign-up pop-up

signUpCloseBtn.addEventListener("click", () => {
   signUpPopup.style.display = "none";
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


signUpCloseBtn




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
      }, 1500); // Popup appears 1.5 seconds after load
    }
  };




