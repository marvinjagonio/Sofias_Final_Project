const popup = document.getElementById("start_popup");
const closeBtn = document.querySelector(".start_popup_close-btn");
const popupForm = document.getElementById("popupForm");
const popupMessage = document.getElementById("popup_message");

window.addEventListener("load", () => {
  const shown = localStorage.getItem("popupShown");

  if (!shown) {
    setTimeout(() => {
      popup.style.display = "block";
    }, 1500);
  }
});

function closePopup() {
  popup.style.display = "none";
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
