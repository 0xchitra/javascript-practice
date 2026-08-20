let taskInput = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let todoList = document.querySelector("#todoList");

addBtn.addEventListener("click", () => {
  let task = taskInput.value.trim();

  if (task === "") {
    return;
  }

  let li = document.createElement("li");
  li.classList.add("todo-item");

  li.textContent = task;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    li.remove();
  });

  li.appendChild(deleteBtn);

  todoList.appendChild(li);

  taskInput.value = "";
});
