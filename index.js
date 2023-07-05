const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addToDo();
});
function addToDo() {
  let inputText = input.value;
  if (inputText) {
    const liEl = document.createElement("li");
    liEl.innerText = inputText;
    const span = document.createElement("span");
    span.innerHTML = '<img src="trash.png">';
    liEl.appendChild(span);

    ul.appendChild(liEl);
    input.value = "";
  }
  save();
}

ul.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("completed");
    save();
  }
  if (e.target.tagName === "IMG") {
    e.target.parentElement.parentElement.remove();
    save();
  }
});

function save() {
  localStorage.setItem("data", ul.innerHTML);
}

function showTask() {
  ul.innerHTML = localStorage.getItem("data");
}
showTask();
addToDo();
