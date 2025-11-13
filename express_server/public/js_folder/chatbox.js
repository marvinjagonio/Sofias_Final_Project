const chatToggle = document.getElementById("chatToggle");
const chatBox = document.querySelector(".chatbox");
const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");

chatToggle.addEventListener("click", () => {
  if (chatBox.classList.toggle("active")) {
    chatBox.style.display = "none";
  } else {
    chatBox.style.display = "flex";
  }
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === "") return;

  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  userInput.value = "";

  // Optional: Add a simple fixed bot response
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
