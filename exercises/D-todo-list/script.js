function todoList(todos) {
  let content = document.querySelector("#content"); // determine where to add our new html content
  let h3 = document.createElement("h3"); // heading element
  let ul = document.createElement("ul"); // unordered list
  
  h3.innerText = "My To-do List:";  // heading text
  content.appendChild(h3);  // add h3 to content
  todos.map(addToDoItem).forEach(li => ul.appendChild(li)); // add to-do list items to ul
  content.appendChild(ul);  // append ul to content
}

// Function to add a to-do list item
let addToDoItem = function (item) {
  // create li elements
  let li = document.createElement("li"); // list item

  li.innerText = item.todo;
  // add some event handlers for user interaction
  li.addEventListener('mouseover', function (e) { // fires when user hovers the mouse over li
    li.style.cursor = "pointer";
  });

  li.addEventListener('click', function () {  // occurs when user clicks li
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    }else {
      li.style.textDecoration = "line-through";
    }
  })

  return li;
};

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);