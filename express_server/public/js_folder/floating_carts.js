// Add TO CART

document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
  const cartButtons = document.querySelectorAll(".cart");
  const cartCountDisplay = document.querySelector("#cartCount");
  const userCart = document.querySelector("#cart_items_container ul");
  const cartBadge = document.getElementById("cartCount");
  const emptyCartMessage = document.querySelector(".empty_cart_message");
  const cartTotalElement = document.getElementById("cartTotal");
  const cartLessElement = document.getElementById("cartLess");
  const checkoutButton = document.getElementById("checkout_button");
  const cartOpenBtn = document.querySelector(".cart_button");
  const cartCloseBtn = document.querySelector("#cart_box .close_button");

  let cartIconCount = 0;

  console.log(cartButtons);

  function parsePrice(value) {
    return Number(value.replace(/[^0-9.-]+/g, ""));
  }

  function calculateCartTotal() {
    let total = 0;
    let discountTotal = 0;

    document.querySelectorAll(".item_1 .price").forEach((el) => {
      total += parsePrice(el.textContent);
    });

    // if you will use a different class for discount, change this line:
    document.querySelectorAll(".item_1 .percent_off").forEach((el) => {
      discountTotal += parsePrice(el.textContent);
    });

    cartTotalElement.textContent = total.toFixed(2);
    cartLessElement.textContent = discountTotal.toFixed(2);
  }

  calculateCartTotal();

  // --- Update Cart Count ---
  function updateCartCount() {
    const cartCount = document.querySelectorAll(".item_1").length;
    if (cartCountDisplay) cartCountDisplay.textContent = cartCount;
  }

  // --- Show/Hide Empty Cart Message ---
  function cartUpdateMessage() {
    const total = parsePrice(cartTotalElement.textContent);

    if (cartIconCount <= 0 || total <= 0) {
      setTimeout(() => {
        emptyCartMessage.classList.add("active");
        setTimeout(() => {
          closeCartView();
        }, 1500);
      }, 50);
    } else {
      emptyCartMessage.classList.remove("active");
    }
  }

  // --- Add Item to Cart ---
  window.addToCart = function (bttn) {
    const addItem =
      bttn.closest(".product-card") ||
      bttn.closest(".product") ||
      bttn.closest(".item_page_full_top");

    if (!addItem) {
      console.warn("❌ No product card found for this button.");
      return;
    }

    const image = addItem.querySelector(".product_image")?.src || "";
    const name =
      addItem.querySelector(".product_name")?.textContent || "Unnamed";
    const price =
      parseFloat(
        addItem.querySelector(".price")?.textContent.replace(/[^0-9.]/g, ""),
      ) || 0;
    const discount =
      parseFloat(
        addItem
          .querySelector(".product_save")
          ?.textContent.replace(/[^0-9.]/g, ""),
      ) || 0;

    const userCart = document.querySelector("#cart_items_container ul");
    const newItem = `
    <li>
      <div class="cart_item item_1">
        <div class="cart_item_image">
          <img src="${image}" alt="${name}" />
         <button class="remove_button">
            <svg width="191px" height="191px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#ff0000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ff0000"></path> </g></svg>
          </button>
        </div>
        
        <div class="cart_item_desc">
          <span>${name}</span>
          <span>Qty. 1</span>
        </div>
        <div class="cart_item_price">
          <b class="price">₱${price.toFixed(2)}</b>
<span class="percent_off" style="color:red">
  <small>-₱${discount.toFixed(2)}</small>
</span>
        </div>
      </div>
    </li>
  `;

    userCart.insertAdjacentHTML("beforeend", newItem);
    calculateCartTotal?.(); // optional safe call if function exists
  };

  // --- Remove Item from Cart ---
  function removeCartItem(button) {
    const cartItem = button.closest("li");
    if (!cartItem) return;
    cartItem.remove();
    cartIconCount = Math.max(0, cartIconCount - 1);
    cartBadge.textContent = cartIconCount;
    updateCartCount();
    calculateCartTotal();
    cartUpdateMessage();
  }

  // --- Cart View Controls ---
  function openCartView() {
    document.querySelector("#cart_window").classList.remove("hide");
    document.querySelector("#cart_window").classList.add("active");
    document.querySelector("#wishlist_cart_window")?.classList.remove("active");
  }

  function closeCartView() {
    document.querySelector("#cart_window").classList.add("hide");
  }

  // --- Checkout ---
  checkoutButton?.addEventListener("click", () => {
    const total = parsePrice(cartTotalElement.textContent);
    const discount = parsePrice(cartLessElement.textContent);
    if (total < 1) {
      alert("No items in the cart.");
    }
    setTimeout(() => {
      alert(
        `Proceeding to checkout with total: ₱${total}\nDiscount: ₱${discount}`,
      );
      emptyCartMessage.classList.add("active");
      userCart.innerHTML = "";
      cartTotalElement.textContent = "₱0.00";
      cartLessElement.textContent = "₱0.00";
      cartCountDisplay.textContent = "0";
      setTimeout(() => {
        closeCartView();
      }, 1500);
    }, 50);
  });

  // --- Button Listeners ---
  cartButtons.forEach((bttn) => {
    bttn.addEventListener("click", (e) => {
      {
        e.preventDefault();
        addToCart(bttn);
        cartIconCount++;
        cartBadge.textContent = cartIconCount;
        updateCartCount();
        calculateCartTotal();
        cartUpdateMessage();
      }
    });
  });

  userCart.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(".remove_button");
    if (removeBtn) removeCartItem(removeBtn);
  });

  cartOpenBtn?.addEventListener("click", () => {
    document.body.classList.add("no-scroll");
    openCartView();
  });

  cartCloseBtn?.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    closeCartView();
  });

  // --- Initialize ---
  calculateCartTotal();
  updateCartCount();
  cartUpdateMessage();

  // ---------- Wishlist ---------- //

  let wishlistCartCount = document.querySelectorAll(".wishlist_item_1").length;
  const wishlistCartButtons = document.querySelectorAll(".wishlist");
  const wishlistCartCountDisplay = document.querySelector(
    "#wishlist-cart-count",
  );
  const wishlistUserCart = document.querySelector(
    "#wishlist_cart_items_container ul",
  );
  const wishlistCartBadge = document.getElementById("wishlistCartCount");

  const wishlistTotalElement = document.querySelector(
    "#wishlist_total_checkout .price",
  );
  const wishlistLessElement = document.querySelector(
    "#wishlist_total_checkout .product_save",
  );

  const wishlistMessage = document.querySelector(
    ".wishlist_empty_cart_message",
  );

  const wishlistOpenBtn = document.querySelector(".wishlist_cart_button");

  const wishlistCloseBtn = document.querySelector(".wishlist_close_button");

  let wishlistCartIconChildCount = 0;

  // --- Initialize ---
  calculateWishlistTotal();
  updateWishlistMessage();
  updateWishListCount();

  // --------- Function to calculate total ---------- //
  function calculateWishlistTotal() {
    let lessTotal = 0;
    let total = 0;

    const items = document.querySelectorAll(".wishlist_item_1 .price");
    const discounts = document.querySelectorAll(
      ".wishlist_item_1 .percent_off",
    );

    items.forEach((priceElement) => {
      let price = parseFloat(priceElement.textContent.replace(/[^\d.-]/g, ""));
      if (!isNaN(price)) {
        total += price;
      }
    });

    discounts.forEach((lessElement) => {
      let price = parseFloat(lessElement.textContent.replace(/[^\d.-]/g, ""));
      if (!isNaN(price)) {
        lessTotal += price;
      }
    });

    // Update the total in the checkout area
    wishlistTotalElement.textContent = total.toFixed(2);
    wishlistLessElement.textContent = lessTotal.toFixed(2);
  }

  document.addEventListener("click", (e) => {
    const removeBtn = e.target.closest(
      " .wishlist_cart_item_image .wishlist_remove_button",
    );
    if (removeBtn) {
      setTimeout(calculateWishlistTotal, 100);
    }
  });

  document.addEventListener("click", (e) => {
    const cartBtn = e.target.closest(".cart");
    if (!cartBtn) return;

    const wishlistItem = cartBtn.closest(".wishlist_cart_item");
    e.preventDefault();
    removeWishlistItem(wishlistItem);
    updateWishlistMessage();
    wishlistCartIconChildCount--;
    wishlistCartBadge.textContent = wishlistCartIconChildCount;

    addToCart(bttn);
    cartIconCount++;
    cartBadge.textContent = cartIconCount;
    updateCartCount();
    calculateCartTotal();
    cartUpdateMessage();
  });

  // Checkout button click

  function updateWishlistMessage() {
    const wishlistTotal = parseFloat(wishlistTotalElement.textContent);

    if (wishlistCartIconChildCount <= 0 || wishlistTotal <= 0) {
      setTimeout(() => {
        wishlistMessage.classList.add("active");
        setTimeout(() => {
          wishlistCloseCartView();
        }, 1500);
      }, 50);
    } else {
      wishlistMessage.classList.remove("active");
    }
  }

  wishlistOpenBtn?.addEventListener("click", () => {
    document.body.classList.add("no-scroll");
    wishlistOpenCartView();
  });

  wishlistCloseBtn?.addEventListener("click", () => {
    document.body.classList.remove("no-scroll");
    wishlistCloseCartView();
  });

  // Initialize display if exists
  if (wishlistCartCountDisplay) {
    wishlistCartCountDisplay.textContent = wishlistCartIconChildCount;
  }

  wishlistCartButtons.forEach((bttn) => {
    bttn.addEventListener("click", (e) => {
      wishlistCartIconChildCount++;

      wishlistCartBadge.textContent = wishlistCartIconChildCount;
    });
  });

  function updateWishListCount() {
    wishlistCartCount = document.querySelectorAll(".wishlist_item_1").length;

    if (wishlistCartCountDisplay) {
      wishlistCartCountDisplay.textContent = wishlistCartCount;
    }
  }

  // Add to Cart buttons
  wishlistCartButtons.forEach((bttn) => {
    bttn.addEventListener("click", (e) => {
      e.preventDefault();
      addToWishlist(wishlistUserCart, bttn);
      updateWishListCount();
      updateWishlistMessage();
    });
  });

  // Cart scroll effect
  wishlistUserCart.addEventListener("scroll", () => {
    cartScrollEffect(wishlistUserCart);
  });

  wishlistUserCart.addEventListener("click", (e) => {
    let wishlistTargetElement = e.target.closest(
      ".wishlist_cart_item_image .wishlist_remove_button",
    );
    if (wishlistTargetElement) {
      wishlistCartIconChildCount--;
      wishlistCartBadge.textContent = wishlistCartIconChildCount;
    }
  });

  wishlistUserCart.addEventListener("click", (e) => {
    const targetElement = e.target.closest(
      ".wishlist_cart_item_image .wishlist_remove_button",
    );

    if (targetElement) {
      removeWishlistItem(targetElement);
      updateWishlistMessage();
    }
  });

  function removeWishlistItem(el) {
    const wishlistItem = el.closest("li");
    if (!wishlistItem) return;

    wishlistItem.remove();
    updateWishListCount();
    calculateWishlistTotal();
  }

  function wishlistOpenCartView() {
    document.querySelector("#wishlist_cart_window").classList.remove("hide");
    document.querySelector("#wishlist_cart_window").classList.add("active");
  }

  function wishlistCloseCartView() {
    document.querySelector("#wishlist_cart_window").classList.add("hide");
  }

  const pesoFormatter = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  });

  //--------- Add to Wishlist function ----------//
  function addToWishlist(wishlistUserCart, bttn) {
    const addItem = bttn.closest(".product");
    const addItemImage = addItem.querySelector("a img").src;
    const elementName = addItem.querySelector(".product_name").textContent;

    const price =
      parseFloat(
        addItem.querySelector(".price")?.textContent.replace(/[^0-9.]/g, ""),
      ) || 0;

    const discount =
      parseFloat(
        addItem
          .querySelector(".product_save")
          ?.textContent.replace(/[^0-9.]/g, ""),
      ) || 0;

    const newItem = `
    <li>
      <div class="wishlist_cart_item">
        <div class="wishlist_cart_item_image">
          <img src="${addItemImage}" alt="${elementName}" />
          <button class="wishlist_cart_item_image wishlist_remove_button"> <svg width="191px" height="191px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ff0000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#ff0000"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#ff0000"></path> </g></svg></button>
        </div>

        <div class="wishlist_cart_item_desc">
          <span>${elementName}</span>
          <span>Qty. 1</span>
        </div>

        <div class="wishlist_cart_item_price">
          <b class="wishlist_price">₱${price.toFixed(2)}</b>
          <span class="percent_off" style="color:red">
            <small>₱${discount.toFixed(2)}</small>
          </span>
        </div>

        <button class="cart">
          <img src="image/cart.png" alt="Add to cart" />
        </button>
      </div>
    </li>
  `;

    wishlistUserCart.insertAdjacentHTML("beforeend", newItem);
    calculateWishlistTotal();
  }
});
