
 
// ===== Pop-up Form =====
const popupForm = document.getElementById("popupForm");
const popupMessage = document.getElementById("popup_message");
const popupCloseBtn = document.querySelector(".start_popup_close-btn");

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
