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
  const elementName = addItem.querySelector(".product_column p").textContent;
  const addItemPrice = addItem.querySelector(".price").textContent.substring(1);

  const newItem = `<li>
      <div class="cart_item">
        <div class="item_1">
          <div class="cart_item_image">
            <img src="${addItemImage}" alt="${elementName}" />
            <button class="remove_button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="white" stroke-width="2" />
                <path d="M6 6L18 18" stroke="white" stroke-width="2" />
              </svg>
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
