let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");

let todoList = [];

let todosCount = todoList.length;

function onTodoStatusChange(checkboxId, labelId) {
  let checkboxElement = document.getElementById(checkboxId);
  let labelElement = document.getElementById(labelId);

  if (checkboxElement.checked === true) {
    labelElement.classList.add("checked");
  } else {
    labelElement.classList.remove("checked");
  }
}

function onDeleteTodo(todoId) {
  let todoElement = document.getElementById(todoId);

  todoItemsContainer.removeChild(todoElement);
}

function createAndAppendTodo(todo) {
  let todoId = "todo" + todo.uniqueNo;
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;

  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;

  inputElement.onclick = function () {
    onTodoStatusChange(checkboxId, labelId);
  };

  inputElement.classList.add("checkbox-input");
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.id = labelId;
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("button");
  deleteIcon.textContent = "Delete";
  deleteIcon.classList.add("delete-icon");

  let editIcon = document.createElement("button");
  editIcon.textContent = "edit";
  editIcon.classList.add("edit-icon");
  deleteIconContainer.appendChild(editIcon);

  editIcon.addEventListener("click", function () {
    todoElement.id = todoId;
    labelElement.textContent = prompt("enter edit");
  });

  deleteIcon.onclick = function () {
    onDeleteTodo(todoId);
  };

  deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}
// let arr = [];

function onAddTodo() {
  let userInputElement = document.getElementById("todoUserInput");
  let userInputValue = userInputElement.value;
  todoList.push(userInputValue);
  console.log(todoList);

  if (userInputValue === "") {
    alert("Enter Valid Text");
    return;
  }

  todosCount = todosCount + 1;

  let newTodo = {
    text: userInputValue,
    uniqueNo: todosCount,
  };
  console.log(newTodo);

  createAndAppendTodo(newTodo);
  userInputElement.value = "";
}

addTodoButton.onclick = function () {
  onAddTodo();
};
