let textInput = document.querySelector("#text-input");
let wordCount = document.querySelector("#word-count");
let charCount = document.querySelector("#char-count");

function UpdateCounts(){
  let text = textInput.value;
  let chars = text.length;
  let words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  wordCount.textContent = words
  charCount.textContent = chars
}

textInput.addEventListener("input",UpdateCounts);

