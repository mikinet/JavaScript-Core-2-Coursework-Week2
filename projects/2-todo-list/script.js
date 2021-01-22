// Create preliminary object frameworks
let elements = [
  {
    type: "li",
    class: [
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
    ],
    parentSelector: "#todo-list",
  },
  {
    type: "span",
    class: ["badge", "bg-primary", "rounded-pill"],
    parentSelector: ".list-group-item",
  },

  {
    type: "i",
    class: ["fa", "fa-check"],
    "aria-hidden": true,
    parentSelector: ".badge",
  },
  {
    type: "i",
    class: ["fa", "fa-trash"],
    "aria-hidden": true,
    parentSelector: ".badge",
  },
];

function populateTodoList(todos) {
  for (let i = 0; i < todos.length; i++) {
    addTaskToList(todos[i]);
  }
}

function addTaskToList(todo) {
  let listItemObj = elements.find((element) => element.type === "li");
  let spanObj = elements.find((element) => element.type === "span");
  let checkObj = elements.filter((element) => element.type === "i")[0];
  let trashObj = elements.filter((element) => element.type === "i")[1];

  let li, span, check, trash; // list item, span, tick button, delete button

  listItemObj.innerText = todo.task;
  listItemObj.completed = todo.completed;
  li = createHtmlElement(listItemObj);
  span = createHtmlElement(spanObj, li);
  check = createHtmlElement(checkObj, span);
  trash = createHtmlElement(trashObj, span);

  check.addEventListener("click", updateTask); // to update task as completed or not
  trash.addEventListener("click", deleteTask); // to delete a task from the list
}

// A function to create and append an html element
function createHtmlElement(obj, parentNode) {
  let el = document.createElement(obj.type);
  for (i = 0; i < obj.class.length; i++) {
    el.classList.add(obj.class[i]);
  }
  if (obj.type === "li") {
    el.innerText = obj.innerText;
    if (obj.completed) {
      el.style.textDecoration = "line-through";
    } else {
      el.style.textDecoration = "none";
    }
  }
  if (obj["aria-hidden"]) {
    el.setAttribute("aria-hidden", true);
  }
  if (parentNode) {
    parentNode.appendChild(el);
  } else {
    document.querySelector(obj.parentSelector).appendChild(el);
  }

  return el;
}

function updateTask(e) {
  let li = e.target.parentNode.parentNode;
  if (li.style.textDecoration === "none") {
    li.style.textDecoration = "line-through";
  } else {
    li.style.textDecoration = "none";
  }
}

function deleteTask(e) {
  let li = e.target.parentNode.parentNode;
  li.remove();
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  let newTodo = {
    task: document.getElementById("todoInput").value,
    completed: false,
  };
  if (newTodo.task) {
    addTaskToList(newTodo);
    document.getElementById("todoInput").value = "";
  }
}

// A function that checks the todos in the todo list and deletes the completed ones
function deleteAllCompletedTodos() {
  let button = document.createElement("button");
  document.getElementById("todo-list").parentNode.prepend(button);
  button.innerText = "Delete tasks";
  button.style.backgroundColor = "white";
  button.style.color = "red";
  button.classList.add("btn", "mb-1");

  button.addEventListener("click", function () {
    document.querySelectorAll("#todo-list li").forEach((li) => {
      if (li.style.textDecoration === "line-through") {
        li.remove();
      }
    });
  });
}
deleteAllCompletedTodos();
