
 
// ===== Pop-up Form =====
const popupForm = document.getElementById("popupForm");
const popupMessage = document.getElementById("popup_message");
const popupCloseBtn = document.querySelector(".start_popup_close-btn");

popupForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("/popup_submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(formData),
  })
    .then((response) => response.text())
    .then((text) => {
      popupMessage.textContent = text;
      popupMessage.style.fontSize = "small";
      popupMessage.style.color = text.toLowerCase().includes("success") ? "green" : "red";
    })
    .catch(() => {
      popupMessage.textContent = "❌ Server error.";
      popupMessage.style.fontSize = "small";
      popupMessage.style.color = "red";
    });
});

popupCloseBtn.addEventListener("click", () => {
  popupForm.reset();
  popupMessage.textContent = "";
  popupMessage.removeAttribute("style");
});

