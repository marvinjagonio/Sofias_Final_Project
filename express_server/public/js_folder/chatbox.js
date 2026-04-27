// ===== CHATBOX SECTION ===== //

const chatToggle = document.getElementById("chatToggle");
const chatBox = document.querySelector(".chatbox");
const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");

chatToggle.addEventListener("click", () => {
  const isActive = chatBox.classList.toggle("active");

  if (isActive) {
    // OPEN
    chatBox.style.display = "flex";
  } else {
    // CLICK AGAIN → CLOSE + RESET
    resetChat();
  }
});

function resetChat() {
  chatBox.classList.remove("active");
  chatBox.style.display = "none";

  // reset input
  userInput.value = "";

  // reset bot message
  botMsg.innerHTML = defaultBotMessage;

  // (optional) reset chat body
  // chatBody.innerHTML = `<div class="bot-message">${defaultBotMessage}</div>`;
}

if (userInput.value.trim() === "") {
  setTimeout(() => {
    chatBox.style.display = "none";
  }, 3000);
}

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  userInput.value = "";

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-message";
    botMsg.innerHTML = `
  <img src="image/SPC-Logo.png" style="width="25px""class="bot-icon" />
  Thank you for your message! I’ll be in touch soon to share more responsive and stylish ideas for the SPC Website!
`;
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}
