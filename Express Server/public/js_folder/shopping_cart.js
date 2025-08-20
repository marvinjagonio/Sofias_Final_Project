document.addEventListener("DOMContentLoaded", () => {
  // Start cart count based on DOM
  let cartCount = document.querySelectorAll(".item_1").length;
  const cartButtons = document.querySelectorAll(".cart");
  const cartCountDisplay = document.querySelector("#cart-count");
  const userCart = document.querySelector("#cart_items_container ul");
  const emptyCartMessage = document.querySelector(".empty_cart_message");
  const cartBadge = document.getElementById("cartCount");
  let cartIconChildCount = 0;

  // --- EVENT LISTENERS ---

  // Open Cart
  document
    .querySelector(".cart_button")
    .addEventListener("click", () => openCartView());

  // Close Cart
  document
    .querySelector("#cart_box .close_button")
    .addEventListener("click", closeCartView);

  // Initialize display if exists
  if (cartCountDisplay) {
    cartCountDisplay.textContent = cartCount;
  }

  // Open Cart
  document
    .querySelector(".cart_button")
    .addEventListener("click", openCartView);

  // Close Cart
  document
    .querySelector("#cart_box .close_button")
    .addEventListener("click", closeCartView);

  // Add to Cart buttons
  cartButtons.forEach((bttn) => {
    bttn.addEventListener("click", (e) => {
      e.preventDefault();
      addToCart(userCart, bttn);
      updateCartCount();
      alert(`You added ${cartCount} item${cartCount !== 1 ? "s" : ""} in cart`);
    });
  });

  cartButtons.forEach((bttn) => {
    bttn.addEventListener("click", (e) => {
      cartIconChildCount++;
      cartBadge.textContent = cartIconChildCount;
    });
  });

  userCart.addEventListener("click", (e) => {
    let targetElement = e.target.closest(".remove_button");
    if (targetElement) {
      cartIconChildCount--;
      cartBadge.textContent = cartIconChildCount;
    }
  });

  // Cart scroll effect
  userCart.addEventListener("scroll", () => {
    cartScrollEffect(userCart);
  });

  // Remove cart item using delegation
  userCart.addEventListener("click", (e) => {
    const targetElement = e.target.closest(".remove_button");
    if (targetElement) {
      removeCartItem(targetElement);
    }
  });

  // --- FUNCTIONS ---

  function updateCartCount() {
    cartCount = document.querySelectorAll(".item_1").length;
    if (cartCountDisplay) {
      cartCountDisplay.textContent = cartCount;
    }
  }

  function removeCartItem(el) {
    const cartItem = el.closest("li");
    if (!cartItem) return;

    cartItem.remove();
    updateCartCount();

    const emptyCartMessage = document.querySelector(".empty_cart_message");
    emptyCartMessage.style.display = cartCount === 0 ? "block" : "none";

    if (cartCount === 0) {
      setTimeout(() => alert("Your cart is now empty."), 500);
    }
  }

  // Initialize userCart here
  userCart = document.querySelector("#cart_items_container ul");

  // Add to Cart
  document.querySelectorAll(".cart").forEach((bttn) => {
    bttn.addEventListener("click", () => {
      addToCart(userCart, bttn);
      cartCount++;

      setTimeout(() => {
        alert(`You added ${cartCount} item${cartCount > 1 ? "s" : ""} in cart`);
      }, 500);
    });
  });

  // Cart scroll effect
  userCart.addEventListener("scroll", () => {
    cartScrollEffect(userCart);
  });

  // Remove cart item
  userCart.addEventListener("click", (e) => {
    let targetElement = e.target.closest(".remove_button");
    if (targetElement) {
      removeCartItem(targetElement);
    }
  });
});

// Remove item
function removeCartItem(el) {
  let cartItem = el.closest("li");
  cartItem.remove();
}

function openCartView() {
  document.querySelector("#cart_window").classList.add("active");
}

function closeCartView() {
  document.querySelector("#cart_window").classList.remove("active");
}

//--------- Add to Cart function ----------//
function addToCart(userCart, bttn) {
  const addItem = bttn.closest(".product");
  const addItemImage = addItem.querySelector(".product a img").src;
  const elementName = addItem.querySelector(".product_name").textContent;
  const addItemPrice = addItem.querySelector(".price").textContent.substring(1);
  const priceDiscount = addItem
    .querySelector(".percent_off")
    .textContent.substring(1);

  const newItem = `<li>
      <div class="cart_item">
        <div class="item_1">
          <div class="cart_item_image">
            <img src="${addItemImage}" alt="${elementName}" />
            <button class="remove_button" onclick="removeItemFromCart()">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#fe5858"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#fe5858"></path> </g></svg>
            </button>
          </div>
          <div class="cart_item_desc">
            <span>${elementName}</span>
            <span>Qty. 1</span>
          </div>
        
        <div class="cart_item_price">
          <span> <b>${addItemPrice}</b></span>
          <span style = " color: red"><small><s>${priceDiscount}</s></small></span>
        </div>
      </div>
    </div>
    </li>`;

  userCart.innerHTML += newItem;

  const emptyCartMessage = document.querySelector(".empty_cart_message");
  emptyCartMessage.style.display = "none";

  updateCartCount();
}

// Cart scroll effect
function cartScrollEffect(userCart) {
  let topFade = document.querySelector(".white_fade_overflow.top");
  let bottomFade = document.querySelector(".white_fade_overflow.bottom");

  topFade.style.opacity = userCart.scrollTop != 0 ? "1" : "0";
  bottomFade.style.opacity =
    userCart.offsetHeight + userCart.scrollTop == userCart.scrollHeight
      ? "0"
      : "1";
}
