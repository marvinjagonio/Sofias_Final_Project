const popup = document.getElementById("start_popup");
const closeBtn = document.querySelector(".start_popup_close-btn");
const popupForm = document.getElementById("popupForm");
const popupMessage = document.getElementById("popup_message");

window.addEventListener("load", () => {
  if (popup) {
    document.body.classList.add("no-scroll");
  }
});

function closePopup() {
  popup.style.display = "none";
  document.body.classList.remove("no-scroll");
  localStorage.setItem("popupShown", "true");
}

closeBtn.addEventListener("click", closePopup);

popupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  popupMessage.textContent = "✅ You're subscribed!";
  popupMessage.style.color = "green";

  localStorage.setItem("popupShown", "true");

  setTimeout(() => {
    closePopup();
  }, 1500);
});
