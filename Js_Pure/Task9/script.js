let TaskInput = document.querySelector("#task-input");
let AddBtn = document.querySelector("#add-btn");
let TaskList = document.querySelector("#task-list");
let ClearBtn = document.querySelector("#clear-btn");

function CrateTaskElement(text) {
  let li = document.createElement("li");
  li.className =
    "flex items-center justify-between bg-slate-900 border border-slate-700 rounded-xl px-4 py-2";

  li.innerHTML = `<span class="task-text">${text}</span>
    <button class="delete-btn text-red-400 hover:text-red-300 font-bold px-2">✕</button>`;

  return li;
}

function addTask() {
  let text = TaskInput.value.trim();
  if (!text) {
    Swal.fire({
      icon: "warning",
      title: "اكتب مهمة الأول",
      timer: 1200,
      showConfirmButton: false,
    });
    return;
  }

  let li = CrateTaskElement(text);
  TaskList.appendChild(li);

  TaskInput.value = "";
  TaskInput.focus();
}
AddBtn.addEventListener("click", addTask);

TaskList.addEventListener("click", (e) => {
  let btn = e.target.closest(".delete-btn");
  if (!btn) return;
  btn.closest("li").remove();
});

ClearBtn.addEventListener("click", () => {
  if (TaskList.children.length === 0) return;
  Swal.fire({
    icon: "warning",
    title: "متأكد؟",
    text: "هيتم حذف كل المهام",
    showCancelButton: true,
    confirmButtonText: "نعم",
    cancelButtonText: "إلغاء",
  }).then((result) => {
    if (result.isConfirmed) {
    TaskList.innerHTML = "";
    }
  });
});
