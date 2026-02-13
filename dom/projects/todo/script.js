const todoList = document.getElementById("todo_list");
const addBtn = document.getElementById("add_btn");
const todoInput = document.getElementById("input");

addBtn.addEventListener("click", function () {
  const todo = document.createElement("li");
  todo.innerHTML = todoInput.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.addEventListener("click", function () {
    todoList.removeChild(todo);
  });

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";

  editBtn.addEventListener("click", function () {
    console.log(todo);
    const newText = prompt("Edit your todo:",todo.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
      todo.firstChild.textContent = newText;
    }
  });

  todo.appendChild(deleteBtn);
  todo.appendChild(editBtn);
  todoList.appendChild(todo);
  todoInput.value = "";
});
