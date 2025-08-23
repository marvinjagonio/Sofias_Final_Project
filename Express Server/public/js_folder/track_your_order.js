document
  .getElementById("track_your_order_form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // stop page reload
    const number = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const formMessage = document.getElementById("formMessage");

    const numberInput = document.getElementById("number");
    const emailInput = document.getElementById("email");

    if (!number || !email) {
      formMessage.textContent = "⚠️ Please fill in all fields.";
      formMessage.className = "error showMessage";
      return;
    } else if (!email.includes("@")) {
      formMessage.textContent = "⚠️ Please enter a valid email.";
      formMessage.className = "error showMessage";
      return;
    } else {
      formMessage.textContent = "✅ Order tracked successfully!";
      formMessage.className = "success showMessage";
      numberInput.value = "";
      numberInput.className = "";
      emailInput.textContent = "";
      emailInput.value = "";

      setTimeout(() => {
        formMessage.textContent = " ";
        formMessage.className = " ";
      }, 2000);
    }
  });
