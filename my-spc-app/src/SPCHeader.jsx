import React from "react";

function SPCHeader() {
  return (
    <header>
      {/* Scrolling Text */}
      <div id="scrolling_text" className="bg-warning py-2 fixed-top">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="5"
          className="px-3"
        >
          Welcome to SPC Computer Hardware — My First Website! This project
          highlights my growing skills in HTML, CSS, JavaScript, UI design, and
          responsive front-end development. Dive into a clean and interactive
          layout where you can explore PC parts, search products, and enjoy
          smooth animations. More features coming soon!
        </marquee>
      </div>

      {/* Navigation Bar */}
      <nav id="navbar1" className="navbar navbar-expand-md bg-light">
        <div className="container-fluid">
          {/* Logo */}
          <a className="navbar-brand" href="index.html">
            <img
              src="image/SPC-Logo.png"
              alt="Logo"
              className="img-fluid ps-3"
              style={{ height: "35px" }}
            />
          </a>

          {/* Toggler */}
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent1"
            aria-controls="navbarContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" id="navbar1_toggler"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse pt-2" id="navbarContent1">
            {/* Search Form */}
            <form
              className="search-container d-flex justify-content-center mb-lg-2 mt-0 mb-0 mx-auto flex-wrap"
              role="search"
              onSubmit={(e) => e.preventDefault()} // Prevent form reload
            >
              <input
                className="form-control w-100 w-md-50"
                type="text"
                id="search"
                placeholder="Search..."
                aria-label="Search"
              />

              <ul id="itemList" className="list-unstyled">
                {[
                  "CPU Cooling Fan",
                  "Graphics Card",
                  "Hard Disk",
                  "Memory",
                  "Motherboard",
                  "PC Case",
                  "Power Supply",
                  "Processor AMD",
                  "Processor INTEL",
                  "Laptops",
                  "Mobile Phone",
                  "Tablet",
                  "Desktop",
                  "RAKK",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={
                        item === "RAKK"
                          ? "../rakk_page.html"
                          : "items_page_folder/items_selection_page_sample.html"
                      }
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li id="noResults" style={{ display: "none", color: "gray" }}>
                  No results found
                </li>
              </ul>

              <button
                className="mx-1 btn btn-primary"
                type="submit"
                id="search-button"
              >
                Search
              </button>
            </form>

            {/* Icons Section */}
            <ul className="navbar gap-lg-3 gap-sm-2 pt-3 pb-0 flex-nowrap justify-content-evenly list-unstyled d-flex">
              {[
                { href: "#", src: "icons/about.png", alt: "About" },
                {
                  href: "items_page_folder/track_your_order.html",
                  src: "icons/track_your_order.png",
                  alt: "Track your order",
                  title: "Track your order",
                },
                {
                  href: "#",
                  src: "icons/comment_icon.png",
                  alt: "Comment Page",
                  title: "Comment Page",
                },
                {
                  href: "#",
                  src: "icons/log_in.png",
                  alt: "Log-in",
                  title: "Log-in",
                  id: "loginBtn",
                },
                {
                  href: "#",
                  src: "icons/sign_up.png",
                  alt: "Sign-up",
                  title: "Sign-up",
                  id: "signUpBtn",
                },
              ].map(({ href, src, alt, title, id }, idx) => (
                <li key={idx} className="nav-item mx-1 gap-sm-2" id={id}>
                  <a href={href}>
                    <img
                      src={src}
                      className="img-fluid nav-icon"
                      alt={alt}
                      title={title}
                    />
                  </a>
                </li>
              ))}

              {/* Wishlist */}
              <li className="nav-item mx-1 position-relative">
                <a href="#" className="position-relative">
                  <img
                    className="wishlist_cart_button img-fluid nav-icon"
                    title="Wishlist"
                    src="icons/wishlist.png"
                    alt="Wishlist"
                  />
                  <span
                    id="wishlistCartCount"
                    className="position-absolute top-1 left-0 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    0
                  </span>
                </a>
              </li>

              {/* Cart */}
              <li className="nav-item mx-1 position-relative">
                <a href="#" className="position-relative">
                  <img
                    className="cart_button img-fluid nav-icon"
                    title="Cart"
                    src="icons/cart.png"
                    alt="Cart"
                  />
                  <span
                    id="cartCount"
                    className="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-danger"
                  >
                    0
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default SPCHeader;
