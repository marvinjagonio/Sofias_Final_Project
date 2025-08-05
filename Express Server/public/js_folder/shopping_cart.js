// let userCart;
// document.addEventListener("DOMContentLoaded", () => {
//   //Open Cart
//   document
//     .querySelector(".cart_button")
//     .addEventListener("click", openCartView);
//   //Close Cart
//   document
//     .querySelector("#cart_box .close_button")
//     .addEventListener("click", closeCartView);
//   //Add to Cart
//   userCart = document.querySelector("#cart_items_container ul");
//   document.querySelectorAll(".cart").forEach((bttn) => {
//     bttn.addEventListener("click", () => {
//       addToCart(userCart, bttn);
//     });
//   });

//   //Cart scroll effect
//   userCart.addEventListener("scroll", () => {
//     cartScrollEffect(userCart);
//   });

//   //Remove cart item
//   userCart.addEventListener("click", (e) => {
//     let targetElement = e.target.closest(".remove_button");

//     if (targetElement) {
//       removeCartItem(targetElement);
//     }
//   });
// });

// //Remove item
// function removeCartItem(el) {
//   let cartItem = el.closest("li");
//   cartItem.remove();
// }
// function openCartView() {
//   document.querySelector("#cart_window").classList.add("active");
// }

// //Close cart
// function closeCartView() {
//   document.querySelector("#cart_window").classList.remove("active");
// }

// function addToCart(userCart, bttn) {
//   const addItem = bttn.closest(".product");
//   const addItemImage = addItem.querySelector(".product a img").src;
//   const elementName = addItem.querySelector(".product_column p").textContent;
//   const addItemPrice = addItem.querySelector(".price").textContent.substring(1);

//   const newItem = `<li>
//                   <div class="cart_item">
//                     <div class="item_1">
//                       <div class="cart_item_image">
//                         <img src="${addItemImage}" alt="${elementName}" />
//                         <button class="remove_button">
//                           <svg
//                             width="223px"
//                             height="223px"
//                             viewBox="-3.36 -3.36 30.72 30.72"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                             stroke="#000000"
//                             stroke-width="0.00024000000000000003"
//                           >
//                             <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
//                             <g
//                               id="SVGRepo_tracerCarrier"
//                               stroke-linecap="round"
//                               stroke-linejoin="round"
//                               stroke="#CCCCCC"
//                               stroke-width="0.048"
//                             ></g>
//                             <g id="SVGRepo_iconCarrier">
//                               <path
//                                 opacity="0.5"
//                                 d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22Z"
//                                 fill="#ff0000"
//                               ></path>
//                               <path
//                                 d="M8.96967 8.96967C9.26256 8.67678 9.73744 8.67678 10.0303 8.96967L12 10.9394L13.9697 8.96969C14.2626 8.6768 14.7374 8.6768 15.0303 8.96969C15.3232 9.26258 15.3232 9.73746 15.0303 10.0303L13.0607 12L15.0303 13.9697C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0304 15.0303C9.73746 15.3232 9.26258 15.3232 8.96969 15.0303C8.6768 14.7374 8.6768 14.2626 8.96969 13.9697L10.9394 12L8.96967 10.0303C8.67678 9.73744 8.67678 9.26256 8.96967 8.96967Z"
//                                 fill="#ff0000"
//                               ></path>
//                             </g>
//                           </svg>
//                         </button>
//                       </div>
//                       <div class="cart_item_desc">
//                         <span>${addItemName}</span>
//                         <span>Qty. 1</span>
//                       </div>
//                     </div>
//                     <div class="cart_item_price">
//                       <span>${addItemPrice}</span>
//                     </div>
//                   </div>
//                 </li>`;
//   userCart.innerHTML += newItem;
// }

// Declare globally

document.addEventListener("DOMContentLoaded", () => {
  // Open Cart
  document
    .querySelector(".cart_button")
    .addEventListener("click", openCartView);

  // Close Cart
  document
    .querySelector("#cart_box .close_button")
    .addEventListener("click", closeCartView);

  // Initialize userCart here
  userCart = document.querySelector("#cart_items_container ul");

  // Add to Cart
  document.querySelectorAll(".cart").forEach((bttn) => {
    bttn.addEventListener("click", () => {
      addToCart(userCart, bttn);
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

// Open cart
function openCartView() {
  document.querySelector("#cart_window").classList.add("active");
}

// Close cart
function closeCartView() {
  document.querySelector("#cart_window").classList.remove("active");
}

// Add to Cart function
function addToCart(userCart, bttn) {
  const addItem = bttn.closest(".product");
  const addItemImage = addItem.querySelector(".product a img").src;
  const elementName = addItem.querySelector(".product_name").textContent;
  const addItemPrice = addItem.querySelector(".price").textContent.substring(1);

  const newItem = `<li>
      <div class="cart_item">
        <div class="item_1">
          <div class="cart_item_image">
            <img src="${addItemImage}" alt="${elementName}" />
            <button class="remove_button">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.00386 9.41816C7.61333 9.02763 7.61334 8.39447 8.00386 8.00395C8.39438 7.61342 9.02755 7.61342 9.41807 8.00395L12.0057 10.5916L14.5907 8.00657C14.9813 7.61605 15.6144 7.61605 16.0049 8.00657C16.3955 8.3971 16.3955 9.03026 16.0049 9.42079L13.4199 12.0058L16.0039 14.5897C16.3944 14.9803 16.3944 15.6134 16.0039 16.0039C15.6133 16.3945 14.9802 16.3945 14.5896 16.0039L12.0057 13.42L9.42097 16.0048C9.03045 16.3953 8.39728 16.3953 8.00676 16.0048C7.61624 15.6142 7.61624 14.9811 8.00676 14.5905L10.5915 12.0058L8.00386 9.41816Z" fill="#fe5858"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" fill="#fe5858"></path> </g></svg>
            </button>
          </div>
          <div class="cart_item_desc">
            <span>${elementName}</span>
            <span>Qty. 1</span>
          </div>
        </div>
        <div class="cart_item_price">
          <span>${addItemPrice}</span>
        </div>
      </div>
    </li>`;

  userCart.innerHTML += newItem;
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
