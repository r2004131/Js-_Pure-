const names = [
  "أحمد",
  "محمد",
  "محمود",
  "علي",
  "حسن",
  "حسين",
  "فاطمة",
  "سارة",
  "مريم",
  "خالد",
];
let searchInput = document.querySelector("#search-input");
let names_list = document.querySelector("#names-list");
let no_res = document.querySelector("#no-results");

function render(filteredNames) {
  names_list.innerHTML = "";

  if (filteredNames.length === 0) {
    no_res.classList.remove("hidden");
    return;
  } else {
    no_res.classList.add("hidden");
  }

  filteredNames.forEach((name) => {
    let li = document.createElement("li");
    li.className = "bg-slate-900 border border-slate-700 rounded-xl px-4 py-2";

    li.textContent = name;
    names_list.appendChild(li);
  });
}

function filterNames(query) {
  let q = query.trim().toLowerCase();
  if (!q) return names;
  return names.filter((name) => {
    return name.toLowerCase().includes(q);
  });
}

searchInput.addEventListener("input", () => {
  let filterd = filterNames(searchInput.value);
  render(filterd);
});

render(names);
