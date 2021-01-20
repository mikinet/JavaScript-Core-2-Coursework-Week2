function shoppingList(arrayOfItems) {
  let content = document.getElementById("content");
  let ul = document.createElement("ul");
  arrayOfItems.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });
  content.appendChild(ul);
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
