const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const greetings = document.querySelector(".js-greetings");
const TODOS_LS = "toDos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function delBtnHandler(event) {
  const target = event.target;
  const Father = target.parentNode;
  const ID = Father.id;
  toDoList.removeChild(Father);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(ID);
  });
  toDos = cleanToDos;
  saveToDos();
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const NewId = toDos.length + 1;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = NewId;
  delBtn.innerHTML = "✖︎";
  delBtn.addEventListener("click", delBtnHandler);
  span.innerText = text;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: NewId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function givesubmit(event) {
  event.preventDefault();
  const plustodo = toDoInput.value;
  paintTodo(plustodo);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const ParsedToDos = JSON.parse(loadedToDos);
    ParsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
  }
}

function init() {
  toDoForm.addEventListener("submit", givesubmit);
  loadToDos();
}

init();
