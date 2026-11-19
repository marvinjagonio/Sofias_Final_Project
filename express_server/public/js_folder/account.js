const menuItems = document.querySelectorAll(".account-menu li");
const sections = document.querySelectorAll(".account-section");

// Sidebar navigation
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((menu) => menu.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    item.classList.add("active");

    const target = item.dataset.section;
    document.getElementById(target).classList.add("active");
  });
});

// Demo customer information
const customer = JSON.parse(localStorage.getItem("spcCustomer") || "null") || {
  name: "Customer Name",
  username: "customer",
  email: "customer@example.com",
};

document.getElementById("welcomeName").textContent = customer.name;
document.getElementById("sidebarUsername").textContent = customer.name;

document.getElementById("profileName").value = customer.name;
document.getElementById("profileUsername").value = customer.username;
document.getElementById("profileEmail").value = customer.email;

// Save profile
document.getElementById("profileForm").addEventListener("submit", (e) => {
  e.preventDefault();

  customer.name = document.getElementById("profileName").value;
  customer.username = document.getElementById("profileUsername").value;
  customer.email = document.getElementById("profileEmail").value;

  localStorage.setItem("spcCustomer", JSON.stringify(customer));

  document.getElementById("welcomeName").textContent = customer.name;
  document.getElementById("sidebarUsername").textContent = customer.name;

  document.getElementById("profileMessage").textContent =
    "Profile updated successfully!";

  document.getElementById("profileMessage").style.color = "green";
});

// Save delivery address
document.getElementById("addressForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const address = {
    name: document.getElementById("recipientName").value,
    phone: document.getElementById("recipientPhone").value,
    address: document.getElementById("recipientAddress").value,
  };

  localStorage.setItem("spcAddress", JSON.stringify(address));

  document.getElementById("savedAddress").innerHTML =
    `<div class="alert alert-success">
      <strong>${escapeHTML(address.name)}</strong><br>
      ${escapeHTML(address.phone)}<br>
      ${escapeHTML(address.address)}
    </div>`;

  document.getElementById("addressMessage").textContent =
    "Address saved successfully!";
});

// Load saved address
function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char],
  );
}

const savedAddress = JSON.parse(localStorage.getItem("spcAddress") || "null");

if (savedAddress) {
  document.getElementById("recipientName").value = savedAddress.name;
  document.getElementById("recipientPhone").value = savedAddress.phone;
  document.getElementById("recipientAddress").value = savedAddress.address;

  document.getElementById("savedAddress").innerHTML =
    `<div class="alert alert-success">
      <strong>${escapeHTML(savedAddress.name)}</strong><br>
      ${escapeHTML(savedAddress.phone)}<br>
      ${escapeHTML(savedAddress.address)}
    </div>`;
}

// Demo password validation only
document.getElementById("passwordForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const current = document.getElementById("currentPassword").value;
  const newPass = document.getElementById("newPassword").value;
  const confirm = document.getElementById("confirmNewPassword").value;

  const message = document.getElementById("passwordMessage");

  if (newPass !== confirm) {
    message.textContent = "New passwords do not match!";
    message.style.color = "red";
    return;
  }

  if (current === newPass) {
    message.textContent = "Please choose a different password.";
    message.style.color = "red";
    return;
  }

  message.textContent =
    "Password form validated. Backend authentication is required to update it.";
  message.style.color = "green";

  e.target.reset();
});
