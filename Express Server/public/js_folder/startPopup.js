// ===== Pop-up Form =====
const popupForm = document.getElementById("popupForm");
const popupMessage = document.getElementById("popup_message");
const popupCloseBtn = document.querySelector(".start_popup_close-btn");
const startPopupCloseBtn = document.querySelector(".start_popup_close-btn");
const startPopup = document.getElementById("start_popup");

popupForm.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(popupForm);

  const response = await fetch("/popup_submit", {
    method: "POST",
    body: new URLSearchParams(formData),
  });

  const resultText = await response.text();
  popupMessage.textContent = resultText;

  popupMessage.style.fontSize = "small";
  popupMessage.style.color = resultText.includes("✅") ? "green" : "red";
});

popupCloseBtn.addEventListener("click", () => {
  popupForm.reset();
  popupMessage.textContent = "";
  popupMessage.removeAttribute("style");
});

function showPopup() {
  document.getElementById("start_popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("start_popup").style.display = "none";
}

function handleFirstClick() {
  if (!localStorage.getItem("popupShown")) {
    localStorage.setItem("popupShown", "true");
  }

  window.removeEventListener("click", handleFirstClick);
}

if (!localStorage.getItem("popupShown")) {
  window.addEventListener("click", handleFirstClick);
}
