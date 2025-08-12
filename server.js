const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Handle form submission
app.post("/sign-up_submit", (req, res) => {
  const { name, username, email, password } = req.body;

  const entry = `name: ${name}\nusername: ${username}\nemail: ${email}\npassword: ${password}\n\n`;

  const filePath = path.join(__dirname, "submissions.txt");

  fs.readFile(filePath, "utf8", (readErr, data) => {
    if (!readErr && data.includes(`email: ${email}`)) {
      return res.send("⚠️ Account already exists.");
    }

    fs.appendFile(filePath, entry, (writeErr) => {
      if (writeErr) {
        console.error("Error writing to file:", writeErr);
        return res.send("❌ Error saving data.");
      }

      res.send("✅ Form submitted and saved successfully.");
    });
  });
});

// Log-in
app.post("/login_submit", (req, res) => {
  const { email, password } = req.body;

  const filePath = path.join(__dirname, "submissions.txt");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.send("❌ Error reading file.");

    const lines = data.split("\n").filter((line) => line.trim() !== "");

    let found = false;

    for (let i = 0; i < lines.length; i += 4) {
      const emailLine = lines[i + 2];
      const passwordLine = lines[i + 3];

      if (emailLine && passwordLine) {
        const storedEmail = emailLine
          .replace("email:", "")
          .trim()
          .toLowerCase();
        const storedPassword = passwordLine.replace("password:", "").trim();

        if (
          storedEmail === email.toLowerCase() &&
          storedPassword === password
        ) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      res.send("✅ Log-in Successfully.");
    } else {
      res.send("❌ Invalid email or password.");
    }
  });
});

// Popup Form
app.post("/popup_submit", (req, res) => {
  const { email } = req.body;

  const filePath = path.join(__dirname, "submissions.txt");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) return res.send("❌ Error reading file.");

    const lines = data.split("\n").filter((line) => line.trim() !== "");

    let found = false;

    for (let i = 0; i < lines.length; i += 4) {
      const emailLine = lines[i + 2];

      if (emailLine) {
        const storedEmail = emailLine
          .replace("email:", "")
          .trim()
          .toLowerCase();

        if (storedEmail === email.toLowerCase()) {
          found = true;
          break;
        }
      }
    }

    if (found) {
      res.send("✅ Subscribe Successfully.");
    } else {
      res.send("❌ Not yet registered.");
    }
  });
});

// ✅ Start server OUTSIDE the route
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
