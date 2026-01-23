const popup = document.getElementById("start_popup");
const closeBtn = document.querySelector(".start_popup_close-btn");
const popupForm = document.getElementById("popupForm");
const popupMessage = document.getElementById("popup_message");

window.addEventListener("load", () => {
  const shown = localStorage.getItem("popupShown");

  if (shown) {
    document.body.classList.add("no-scroll");
  }
});

function openPopup() {
  popup.style.display = "flex";
}

function closePopup() {
  popup.style.display = "none";
  document.body.classList.remove("no-scroll");
}

closeBtn.addEventListener("click", closePopup);

popupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  popupMessage.textContent = "✅ You're subscribed!";
  popupMessage.style.color = "white";

  localStorage.setItem("popupShown", "true");

  setTimeout(() => {
    closePopup();
  }, 1500);
});
