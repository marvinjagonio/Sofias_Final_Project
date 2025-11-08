import SPCHeader from "../../../my-spc-app/src/SPCHeader";

function App() {
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
          >
            <span className="navbar-toggler-icon" id="navbar1_toggler"></span>
          </button>

          {/* Collapsible Content */}
          <div className="collapse navbar-collapse pt-2" id="navbarContent1">
            {/* Search Form */}
            <form
              className="search-container d-flex justify-content-center mb-lg-2 mt-0 mb-0 mx-auto flex-wrap"
              role="search"
            >
              <input
                className="form-control w-100 w-md-50"
                type="text"
                id="search"
                placeholder="Search..."
              />

              <ul id="itemList">
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    CPU Cooling Fan
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Graphics Card
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Hard Disk
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Memory
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Motherboard
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    PC Case
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Power Supply
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Processor AMD
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Processor INTEL
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Loptops
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Mobile Phone
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Tablet
                  </a>
                </li>
                <li>
                  <a href="items_page_folder/items_selection_page_sample.html">
                    Desktop
                  </a>
                </li>
                <li>
                  <a href="../rakk_page.html">RAKK</a>
                </li>

                <li id="noResults" style={{ display: "none", color: "gray" }}>
                  No results found
                </li>
              </ul>

              <button className="mx-1" type="submit" id="search-button">
                Search
              </button>
            </form>

            {/* Icons Section */}
            <ul className="navbar gap-lg-3 gap-sm-2 pt-3 pb-0 flex-nowrap justify-content-evenly">
              <li className="nav-item mx-1 gap-sm-2">
                <a href="#">
                  <img
                    src="icons/about.png"
                    className="img-fluid nav-icon"
                    alt=""
                  />
                </a>
              </li>

              <li className="nav-item mx-1">
                <a href="items_page_folder/track_your_order.html">
                  <img
                    className="img-fluid nav-icon"
                    title="Track your order"
                    src="icons/track_your_order.png"
                    alt=""
                  />
                </a>
              </li>

              <li className="nav-item mx-1">
                <a href="#">
                  <img
                    className="img-fluid nav-icon"
                    title="Comment Page"
                    src="icons/comment_icon.png"
                    alt=""
                  />
                </a>
              </li>

              <li className="nav-item mx-1" id="loginBtn">
                <a href="#">
                  <img
                    className="img-fluid nav-icon"
                    title="Log-in"
                    src="icons/log_in.png"
                    alt=""
                  />
                </a>
              </li>

              <li className="nav-item mx-1" id="signUpBtn">
                <a href="#">
                  <img
                    className="img-fluid nav-icon"
                    title="Sign-up"
                    src="icons/sign_up.png"
                    alt=""
                  />
                </a>
              </li>

              {/* Wishlist */}
              <li className="nav-item mx-1">
                <a href="#" className="position-relative">
                  <img
                    className="wishlist_cart_button img-fluid nav-icon"
                    title="Wishlist"
                    src="icons/wishlist.png"
                    alt=""
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
              <li className="nav-item mx-1">
                <a href="#" className="position-relative">
                  <img
                    className="cart_button img-fluid nav-icon"
                    title="Cart"
                    src="icons/cart.png"
                    alt=""
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

export default App;
