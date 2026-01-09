const loginBtn = document.getElementById("loginBtn");
const loginSection = document.getElementById("loginSection");
const closeBtn = document.getElementById("close");
const form = document.getElementById("loginForm");


loginBtn.addEventListener("click", () => {
  loginSection.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  loginSection.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  alert(`Name: ${name}\nPassword: ${password}`);

  loginSection.style.display = "none";
  form.reset();
});
