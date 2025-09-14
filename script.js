// Part 1: Event Handling
const clickBtn = document.getElementById("clickBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "Button clicked! 🎉";
});

// Part 2: Interactive Elements
// Counter
let count = 0;
const countBtn = document.getElementById("countBtn");
const countDisplay = document.getElementById("count");

countBtn.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop form submission
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    feedback.textContent = " All fields are required.";
    feedback.style.color = "red";
    return;
  }

  // Email validation regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    feedback.textContent = " Please enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = " Form submitted successfully!";
  feedback.style.color = "green";
});
