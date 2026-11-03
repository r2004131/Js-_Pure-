const body = document.querySelector("#body");
const toggleBtn = document.querySelector("#toggle-btn");
const modeText = document.querySelector("#mode-text");
const icon = document.querySelector("#icon");

let isDark = false;

function render() {
  body.classList.toggle("bg-slate-900", isDark);
  body.classList.toggle("text-white", isDark);
  body.classList.toggle("bg-white", !isDark);
  body.classList.toggle("text-slate-900", !isDark);

  modeText.textContent = isDark ? "Dark Mode" : "Light Mode";

  icon.textContent = isDark ? "🌙" : "☀️";

  toggleBtn.classList.toggle("bg-slate-900", !isDark);
  toggleBtn.classList.toggle("text-white", !isDark);
  toggleBtn.classList.toggle("bg-amber-400", isDark);
  toggleBtn.classList.toggle("text-slate-900", isDark);
}

toggleBtn.addEventListener("click", () => {
  isDark = !isDark;
  render();
});

render();
