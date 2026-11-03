const display = document.querySelector("#display");
const decreaseBtn = document.querySelector("#decrease-btn");
const increaseBtn = document.querySelector("#increase-btn");
const resetBtn = document.querySelector("#reset-btn");

let count = 0;
function render() {
  display.textContent = count;

  decreaseBtn.disabled = count === 0;

  display.classList.toggle("text-amber-400", count > 0);
  display.classList.toggle("text-slate-500", count === 0);
}

increaseBtn.addEventListener("click", () => {
  count++;
  render();
});

decreaseBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    render();
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  render();
});

render();
